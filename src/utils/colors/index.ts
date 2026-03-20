import { TinyColor } from '@ctrl/tinycolor';

/**
 * 处理颜色字符串的内部工具函数
 * @private
 * @template T - 返回值的类型
 * @param {string} str - 输入的颜色字符串
 * @param {(color: TinyColor) => T} fn - 颜色处理函数
 * @param {T} fallback - 处理失败时的返回值，默认为空字符串
 * @returns {T} 处理后的颜色值
 * @example
 * processColor('red', color => color.toHexString()) // '#ff0000'
 */
const processColor = <T>(str: string, fn: (color: TinyColor) => T, fallback: T = '' as T): T => {
  if (!str) return fallback;
  try {
    const cleanStr = str.replaceAll(/deg|grad|rad|turn/g, '');
    if (!isColor(cleanStr)) return fallback;
    const color = new TinyColor(cleanStr);
    return fn(color);
  } catch (error) {
    console.error(`Color conversion error:`, { input: str, error });
    return fallback;
  }
};

/**
 * 将颜色转换为十六进制格式
 * @param {string} str - 输入的颜色字符串（支持任何合法的颜色格式）
 * @returns {string} 十六进制颜色字符串，无效颜色返回空字符串
 * @example
 * toHex('red')           // '#ff0000'
 * toHex('rgb(255,0,0)')  // '#ff0000'
 * toHex('hsl(0,100%,50%)') // '#ff0000'
 * toHex('#ff0000')       // '#ff0000'
 * toHex('invalid')       // ''
 */
export const toHex = (str: string): string => {
  return processColor(str, color => color.toHexShortString());
};

/**
 * 将颜色转换为 RGB/RGBA 字符串格式
 * @param {string} str - 输入的颜色字符串（支持任何合法的颜色格式）
 * @returns {string} RGB/RGBA 颜色字符串，无效颜色返回空字符串
 * @example
 * toRgb('red')                 // 'rgb(255, 0, 0)'
 * toRgb('rgba(255,0,0,0.5)')   // 'rgba(255, 0, 0, 0.5)'
 * toRgb('#ff0000')             // 'rgb(255, 0, 0)'
 * toRgb('hsl(0,100%,50%)')     // 'rgb(255, 0, 0)'
 * toRgb('invalid')             // ''
 */
export const toRgb = (str: string): string => {
  return processColor(str, color => color.toRgbString());
};

/**
 * 将颜色转换为 HSL/HSLA 字符串格式
 * @param {string} str - 输入的颜色字符串（支持任何合法的颜色格式）
 * @returns {string} HSL/HSLA 颜色字符串，无效颜色返回空字符串
 * @example
 * toHsl('#ff0000')             // 'hsl(0, 100%, 50%)'
 * toHsl('rgb(255,0,0)')        // 'hsl(0, 100%, 50%)'
 * toHsl('hsla(0,100%,50%,0.5)') // 'hsla(0, 100%, 50%, 0.5)'
 * toHsl('red')                 // 'hsl(0, 100%, 50%)'
 * toHsl('invalid')             // ''
 */
export const toHsl = (str: string): string => {
  return processColor(str, color => color.toHslString());
};

/**
 * 验证颜色字符串是否合法
 * @param {string} [color] - 要验证的颜色字符串
 * @returns {boolean} 是否为合法的颜色值
 * @example
 * isColor('red')           // true
 * isColor('#ff0000')       // true
 * isColor('rgb(255,0,0)')  // true
 * isColor('hsl(0,100%,50%)') // true
 * isColor('invalid')       // false
 * isColor('')              // false
 * isColor()                // false
 */
export const isColor = (color?: string) => {
  if (!color) return false;
  try {
    return new TinyColor(color).isValid;
  } catch {
    console.error('isColor error', color);
    return false;
  }
};

/**
 * 混合两种颜色
 * @param color1 - 第一种颜色
 * @param color2 - 第二种颜色
 * @param weight - 第一种颜色的权重 (0-1)，默认0.5
 * @returns 混合后的颜色字符串
 *
 * @example
 * mixColor('#ff0000', '#0000ff', 0.5) // '#7f007f'
 * mixColor('red', 'blue', 0.3)        // '#4c00b3'
 */
export const mixColor = (color1: string, color2: string, weight = 0.5): string => {
  try {
    const c1 = new TinyColor(color1);
    const c2 = new TinyColor(color2);
    if (!c1.isValid || !c2.isValid) {
      console.error('Invalid color input');
      return '';
    }
    return c2.mix(c1, weight * 100).toHexShortString();
  } catch (error) {
    console.error('mixColor error:', error);
    return '';
  }
};
