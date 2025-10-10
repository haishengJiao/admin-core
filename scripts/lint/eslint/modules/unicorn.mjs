import pluginUnicorn from 'eslint-plugin-unicorn';

/** @type {import('eslint').Linter.Config} */
export const unicorn = {
  plugins: {
    unicorn: pluginUnicorn,
  },
  rules: {
    'unicorn/no-empty-file': 'error', // 禁止空文件，会在空文件中报错
  },
};
