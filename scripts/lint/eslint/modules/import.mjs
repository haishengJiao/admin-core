import pluginImport from 'eslint-plugin-import-x';

/** @type {import('eslint').Linter.Config} */
export const imports = {
  plugins: {
    import: pluginImport,
  },
  rules: {
    // ESLint规则配置部分
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'], // 强制一致的类型导入声明风格，优先使用顶层类型导入
    'import/first': 'error', // 确保所有import语句出现在文件的最前面，在其他语句之前，保持代码结构清晰
    'import/newline-after-import': 'error', // 在import块后强制要求空行分隔，提升代码可读性和视觉层次
    'import/no-duplicates': 'error', // 禁止重复导入同一模块
    'import/no-mutable-exports': 'error', // 禁止导出可变绑定（export let/var），要求导出值为不可变，避免外部修改导出值带来的副作用
    'import/no-named-default': 'error', // 禁止将名为default的命名导入，防止对default导出的混淆用法和命名冲突
    'import/no-self-import': 'error', // 禁止模块自导入（模块不应导入自身），这通常是编码错误或路径配置错误的信号
    'import/no-unresolved': 'off', // 关闭未解析导入检查，因为在TypeScript项目中路径解析由TS编译器处理
    'import/no-webpack-loader-syntax': 'error', // 禁止在import/require中使用webpack loader语法（如"loader!./file"），保持代码的平台无关性
    'import/order': [
      // 强制import语句排序规则，提升代码可读性并保持团队代码风格一致性
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'], // 分组顺序：内置模块、外部模块、内部模块、父级/同级模块、索引文件、对象导入、类型导入
        'newlines-between': 'always', // 不同分组之间强制要求空行分隔，增强代码视觉层次和可读性
        alphabetize: { order: 'asc', caseInsensitive: true }, // 同组内按字母升序排列，忽略大小写，保持导入语句的有序性
      },
    ],
  },
};
