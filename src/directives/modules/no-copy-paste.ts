import { DisableClipboardArgEnum, DisableClipboardModifiersEnum } from '../types';

import type { DisableClipboardDirective, DisableClipboardValue, DisableClipboardModifiersWithoutAll } from '../types';

const elementHandlersMap = new WeakMap<HTMLElement, Map<DisableClipboardModifiersWithoutAll, (event: ClipboardEvent) => void>>();

const shouldPreventAction = (text: string, allowedValues: string[] | undefined, mode: `${DisableClipboardArgEnum}`) => {
  if (!allowedValues || allowedValues.length === 0) return true;

  if (!text) return false;

  if (mode === DisableClipboardArgEnum.STRICT) {
    return !allowedValues.includes(text);
  } else {
    return !allowedValues.some(val => val.includes(text));
  }
};
const createEventHandler = (type: DisableClipboardModifiersWithoutAll, value: DisableClipboardValue, mode: `${DisableClipboardArgEnum}`) => {
  return (event: ClipboardEvent) => {
    let text = '';
    if (type === DisableClipboardModifiersEnum.COPY || DisableClipboardModifiersEnum.CUT) {
      text = window.getSelection()?.toString() || '';
    } else if (type === DisableClipboardModifiersEnum.PASTE) {
      text = event.clipboardData?.getData('text/plain') || '';
    }
    if (shouldPreventAction(text, value, mode)) {
      event.preventDefault();
    }
  };
};

const addEventListener = (el: HTMLElement, type: DisableClipboardModifiersWithoutAll, handler: (event: ClipboardEvent) => void) => {
  el.addEventListener(type, handler);
  if (!elementHandlersMap.has(el)) {
    elementHandlersMap.set(el, new Map());
  }
  const handlers = elementHandlersMap.get(el);
  handlers && handlers.set(type, handler);
};

export const disableClipboard: DisableClipboardDirective = {
  mounted(el, { value, modifiers, arg }) {
    const mode = arg === DisableClipboardArgEnum.LOOSE ? DisableClipboardArgEnum.LOOSE : DisableClipboardArgEnum.STRICT;

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
