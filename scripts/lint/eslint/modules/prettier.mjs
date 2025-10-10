import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config} */
export const prettier = {
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    'prettier/prettier': 'error', // 将Prettier格式化错误作为ESLint错误报告
  },
};
