/** @type {import('eslint').Linter.Config[]} */
export const disabled = [
  {
    // 针对TypeScript声明文件(.d.ts)的特殊配置
    files: ['**/*.d.ts'], // 匹配所有TypeScript声明文件
    name: 'disables/dts', // 配置名称，用于标识该配置的作用
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off', // 关闭三斜线引用检查，在.d.ts文件中三斜线引用是合法的
      'spaced-comment': 'off', // 关闭注释空格检查，.d.ts文件中的三斜线引用不需要空格
    },
  },
  {
    // 针对JavaScript文件的特殊配置
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'], // 匹配所有JavaScript文件（包括ES模块和CommonJS模块）
    name: 'disables/js', // 配置名称，用于标识该配置的作用
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭显式模块边界类型检查，在JS文件中不需要TypeScript类型注释
    },
  },
];
