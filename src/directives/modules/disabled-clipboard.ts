import { DisabledClipboardArgEnum, DisabledClipboardModifiersEnum } from '../types';

import type { DisabledClipboardDirective, DisabledClipboardValue, DisabledClipboardModifiersWithoutAll } from '../types';

const elementHandlersMap = new WeakMap<HTMLElement, Map<DisabledClipboardModifiersWithoutAll, (event: ClipboardEvent) => void>>();

const shouldPreventAction = (text: string, allowedValues: string[] | undefined, mode: `${DisabledClipboardArgEnum}`) => {
  if (!allowedValues || allowedValues.length === 0) return true;

  if (!text) return false;

  if (mode === DisabledClipboardArgEnum.STRICT) {
    return !allowedValues.includes(text);
  } else {
    return !allowedValues.some(val => val.includes(text));
  }
};
const createEventHandler = (type: DisabledClipboardModifiersWithoutAll, value: DisabledClipboardValue, mode: `${DisabledClipboardArgEnum}`) => {
  return (event: ClipboardEvent) => {
    let text = '';
    if (type === DisabledClipboardModifiersEnum.COPY || DisabledClipboardModifiersEnum.CUT) {
      text = window.getSelection()?.toString() || '';
    } else if (type === DisabledClipboardModifiersEnum.PASTE) {
      text = event.clipboardData?.getData('text/plain') || '';
    }
    if (shouldPreventAction(text, value, mode)) {
      event.preventDefault();
    }
  };
};

const addEventListener = (el: HTMLElement, type: DisabledClipboardModifiersWithoutAll, handler: (event: ClipboardEvent) => void) => {
  el.addEventListener(type, handler);
  if (!elementHandlersMap.has(el)) {
    elementHandlersMap.set(el, new Map());
  }
  const handlers = elementHandlersMap.get(el);
  handlers && handlers.set(type, handler);
};

export const disabledClipboard: DisabledClipboardDirective = {
  mounted(el, { value, modifiers, arg }) {
    const mode = arg === DisabledClipboardArgEnum.LOOSE ? DisabledClipboardArgEnum.LOOSE : DisabledClipboardArgEnum.STRICT;

    const disableOperations = {
      copy: modifiers.all || modifiers.copy || (!modifiers.copy && !modifiers.cut && !modifiers.paste),
      cut: modifiers.all || modifiers.cut || (!modifiers.copy && !modifiers.cut && !modifiers.paste),
      paste: modifiers.all || modifiers.paste || (!modifiers.copy && !modifiers.cut && !modifiers.paste),
    };

    if (disableOperations.copy) {
      const copyHandler = createEventHandler('copy', value, mode);
      addEventListener(el, 'copy', copyHandler);
    }

    if (disableOperations.cut) {
      const cutHandler = createEventHandler('cut', value, mode);
      addEventListener(el, 'cut', cutHandler);
    }

    if (disableOperations.paste) {
      const pasteHandler = createEventHandler('paste', value, mode);
      addEventListener(el, 'paste', pasteHandler);
    }
  },
  unmounted(el) {
    const handlers = elementHandlersMap.get(el);
    if (!handlers) return;
    handlers.forEach((handler, type) => {
      el.removeEventListener(type, handler);
    });
    handlers.clear();
    elementHandlersMap.delete(el);
  },
};
