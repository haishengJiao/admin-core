/**
 * 比较两个对象是否相等
 *
 * @param {unknown} firstObj - 第一个要比较的对象
 * @param {unknown} secondObj - 第二个要比较的对象
 * @returns {boolean} 如果两个对象深度相等，返回 true；否则返回 false
 */
export const isEqual = (firstObj: unknown, secondObj: unknown) => {
  if (firstObj === secondObj) return true;
  if (typeof firstObj !== 'object' || firstObj === null || typeof secondObj !== 'object' || secondObj === null) {
    return false;
  }
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);
  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }
  const obj1 = firstObj as Record<string, unknown>;
  const obj2 = secondObj as Record<string, unknown>;
  for (const key of firstObjKeys) {
    if (!secondObjKeys.includes(key) || !isEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};
