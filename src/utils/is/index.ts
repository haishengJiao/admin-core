import { isString } from 'lodash-es';

import { HTTP_REGEXP } from '../regexp';

/**
 * 检查给定的字符串是否是一个有效的 HTTP 或 HTTPS URL
 *
 * @param {unknown} url - 需要检查的 URL 字符串，默认为 undefined
 * @returns {boolean} 如果 URL 是有效的 HTTP 或 HTTPS 地址，返回 true；否则返回 false
 */
export const isHttpUrl = (url: unknown) => {
  if (!isString(url)) return false;
  return HTTP_REGEXP.test(url as string);
};
