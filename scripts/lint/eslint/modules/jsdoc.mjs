import pluginJsdoc from 'eslint-plugin-jsdoc';

/** @type {import('eslint').Linter.Config} */
export const jsdoc = {
  plugins: {
    jsdoc: pluginJsdoc,
  },
  rules: {
    'jsdoc/check-access': 'error', // 检查JSDoc中@access标签的有效性，确保访问修饰符的正确使用
    'jsdoc/check-param-names': 'error', // 检查JSDoc中@param标签的参数名与实际函数参数是否一致
    'jsdoc/check-property-names': 'error', // 检查JSDoc中@property标签的属性名是否正确和一致
    'jsdoc/check-types': 'error', // 检查JSDoc中类型注释的语法正确性和格式规范
    'jsdoc/empty-tags': 'error', // 检查JSDoc中的空标签，确保标签具有必要的内容
    'jsdoc/implements-on-classes': 'error', // 确保@implements标签只在类上使用，不在其他类型的实体上使用
    'jsdoc/no-defaults': 'error', // 禁止在JSDoc中使用默认值注释，应使用代码中的默认参数语法
    'jsdoc/no-multi-asterisks': 'error', // 禁止在JSDoc注释中使用多个连续的星号，保持注释格式清洁
    'jsdoc/require-param-name': 'error', // 要求JSDoc中@param标签必须包含参数名，不允许匿名参数
    'jsdoc/require-property': 'error', // 要求对象类型的JSDoc必须包含@property标签来描述属性
    'jsdoc/require-property-description': 'error', // 要求JSDoc中@property标签必须包含属性的描述信息
    'jsdoc/require-property-name': 'error', // 要求JSDoc中@property标签必须包含属性名
    'jsdoc/require-returns-check': 'error', // 检查JSDoc中@returns标签与实际函数返回值的一致性
    'jsdoc/require-returns-description': 'error', // 要求JSDoc中@returns标签必须包含返回值的描述信息
    'jsdoc/require-yields-check': 'error', // 检查JSDoc中@yields标签与生成器函数的一致性
  },
};
