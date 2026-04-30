import { httpRegex } from '../regexp';

/**
 * 检查给定的值是否是一个字符串
 *
 * @param {unknown} val - 需要检查的值
 * @returns {boolean} 如果值是一个字符串，返回 true；否则返回 false
 */
export const isString = (val: unknown): boolean => typeof val === 'string';

/**
 * 检查给定的值是否是一个函数
 *
 * @param {unknown} val - 需要检查的值
 * @returns {boolean} 如果值是一个函数，返回 true；否则返回 false
 */
export const isFunction = (val: unknown): boolean => typeof val === 'function';

/**
 * 检查给定的值是否是一个对象
 *
 * @param {unknown} val - 需要检查的值
 * @returns {boolean} 如果值不为 null 且是一个对象，返回 true；否则返回 false
 */
export const isObject = (val: unknown): boolean => val !== null && typeof val === 'object';

/**
 * 检查给定的字符串是否是一个有效的 HTTP 或 HTTPS URL
 *
 * @param {unknown} url - 需要检查的 URL 字符串，默认为 undefined
 * @returns {boolean} 如果 URL 是有效的 HTTP 或 HTTPS 地址，返回 true；否则返回 false
 */
export const isHttpUrl = (url: unknown) => {
  if (!isString(url)) return false;
  return httpRegex.test(url as string);
};
