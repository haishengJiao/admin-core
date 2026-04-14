import type { Directive } from 'vue';

export enum DisabledClipboardModifiersEnum {
  COPY = 'copy',
  CUT = 'cut',
  PASTE = 'paste',
  ALL = 'all',
}

export enum DisabledClipboardArgEnum {
  STRICT = 'strict',
  LOOSE = 'loose',
}

export type DisabledClipboardHostElement = HTMLElement;

/**
 * 允许复制/剪切/粘贴的文本内容数组
 * 当指令值为字符串数组时，只有数组中包含的文本内容允许被复制或剪切或粘贴，
 * 其他内容将被阻止。
 */
export type DisabledClipboardValue = string[];

/**
 * 指令修饰符
 * 注意：如果不传递任何修饰符，默认行为等同于使用 all 修饰符
 * @value copy - 禁止复制操作
 * @value cut - 禁止剪切操作
 * @value paste - 禁止粘贴操作
 * @value all - 禁止所有操作（复制、剪切、粘贴） - 此为默认行为
 */
export type DisabledClipboardModifiers = `${DisabledClipboardModifiersEnum}`;

export type DisabledClipboardModifiersWithoutAll = Exclude<DisabledClipboardModifiers, 'all'>;

/**
 * 指令参数
 * 注意：如果不传递任何参数，默认行为等同于使用 strict 参数
 * @value strict - 严格模式：匹配值是否相等 - 此为默认行为
 * @value loose - 宽松模式：includes 匹配值是否包含
 */
export type DisabledClipboardArg = `${DisabledClipboardArgEnum}`;

/**
 * 通过该指令可以阻止用户在指定元素上进行复制、剪切和粘贴操作。
 * 支持通过修饰符精确控制要阻止的操作类型，以及通过参数控制执行模式。
 *
 * @param {DisabledClipboardValue} value - 允许复制/剪切/粘贴的文本内容数组。
 * @param {DisabledClipboardModifiers} modifiers - 指令修饰符对象。
 * @param {boolean} modifiers.copy - 阻止复制操作。
 * @param {boolean} modifiers.cut - 阻止剪切操作。
 * @param {boolean} modifiers.paste - 阻止粘贴操作。
 * @param {boolean} modifiers.all - 阻止所有操作（复制、剪切、粘贴） - 此为默认行为。
 * @param {DisabledClipboardArg} arg - 指令执行模式。
 * @param {'strict'} arg.strict - 严格模式：匹配值是否相等 - 此为默认行为。
 * @param {'loose'} arg.loose - 宽松模式：includes 匹配值是否包含。
 *
 * @example
 * // 基本使用
 * <textarea v-disabled-clipboard></textarea>
 *
 * // 只禁用复制
 * <textarea v-disabled-clipboard.copy></textarea>
 *
 * // 只禁用剪切
 * <textarea v-disabled-clipboard.cut></textarea>
 *
 * // 只禁用粘贴
 * <textarea v-disabled-clipboard.paste></textarea>
 *
 * // 禁用所有操作但允许指定文本内容(可以不加 all 修饰符，默认为 all )
 * <textarea v-disabled-clipboard.all="['允许复制的文本内容']"></textarea>
 *
 * // 严格模式(可以不加 strict 参数，默认为 strict )
 * <textarea v-disabled-clipboard:strict="['允许复制的文本内容']"></textarea>
 *
 * // 宽松模式，例如`测试文本`可以做为复制、剪切、粘贴操作的文本内容
 * <textarea v-disabled-clipboard:loose="['测试文本all', '测试文本copy', '测试文本cut', '测试文本paste']"></textarea>
 *
 * @see {@link DisabledClipboardValue} 了解值的详细说明
 * @see {@link DisabledClipboardModifiers} 了解修饰符的详细说明
 * @see {@link DisabledClipboardArg} 了解参数的详细说明
 */
export type DisabledClipboardDirective = Directive<
  DisabledClipboardHostElement,
  DisabledClipboardValue,
  DisabledClipboardModifiers,
  DisabledClipboardArg
>;
