import pluginRegexp from 'eslint-plugin-regexp';

/** @type {import('eslint').Linter.Config} */
export const regexp = {
  plugins: {
    regexp: pluginRegexp,
  },
  rules: {
    ...pluginRegexp.configs.recommended.rules, // 展开并应用regexp插件推荐的所有规则配置，包括正则表达式语法检查、性能优化建议等
  },
};
