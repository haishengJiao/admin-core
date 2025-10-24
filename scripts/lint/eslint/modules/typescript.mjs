import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config} */
export const typescript = {
  files: ['**/*.?([cm])[jt]s?(x)'], // 适用的文件模式：匹配常见的 JS/TS 及其模块/编译变体
  languageOptions: {
    parser: tsParser, // 使用TypeScript解析器
    parserOptions: {
      ecmaVersion: 'latest', // 使用最新的ECMAScript版本
      sourceType: 'module', // 源码类型为ES模块
      ecmaFeatures: {
        jsx: true, // 启用JSX语法支持
      },
      project: ['./tsconfig.json', './scripts/tsconfig/tsconfig.*.json'], // TypeScript项目配置文件路径
      createDefaultProgram: false, // 不启用 createDefaultProgram（避免性能问题和误报）
      extraFileExtensions: ['.vue'], // 额外解析的文件扩展名（例如 .vue）
      jsxPragma: 'React', // JSX pragma（兼容旧的 JSX 编译器设置）
    },
  },
  plugins: {
    '@typescript-eslint': ts, // TypeScript ESLint插件
  },
  rules: {
    ...ts.configs['eslint-recommended'].overrides?.[0].rules, // 继承 @typescript-eslint 的 eslint-recommended 覆盖规则（如有）
    ...ts.configs.strict.rules, // 继承TypeScript严格规则
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-check': false, // 禁用ts-check注释
        'ts-expect-error': 'allow-with-description', // 允许带描述的ts-expect-error注释
        'ts-ignore': 'allow-with-description', // 允许带描述的ts-ignore注释
        'ts-nocheck': 'allow-with-description', // 允许带描述的ts-nocheck注释
      },
    ], // 限制TypeScript注释的使用
    '@typescript-eslint/consistent-type-definitions': 'off', // 关闭一致的类型定义规则
    '@typescript-eslint/explicit-function-return-type': 'off', // 关闭显式函数返回类型规则
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭显式模块边界类型规则
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }], // 禁止空函数，允许空的箭头函数、普通函数和方法
    '@typescript-eslint/no-explicit-any': 'error', // 禁止使用any类型，强制使用具体类型
    '@typescript-eslint/no-namespace': 'off', // 关闭禁止命名空间规则
    '@typescript-eslint/no-non-null-assertion': 'error', // 禁止非空断言操作符
    '@typescript-eslint/no-unused-expressions': 'off', // 关闭禁止未使用表达式规则
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }], // 禁止未使用的变量，忽略以下划线开头的参数、忽略以下划线开头的变量
    '@typescript-eslint/no-use-before-define': 'off', // 关闭禁止在定义前使用规则
    '@typescript-eslint/no-var-requires': 'error', // 禁止使用var require语法
    'unused-imports/no-unused-vars': 'off', // 关闭 unused-imports 对 vars 的检测，避免与 @typescript-eslint/no-unused-vars 冲突
  },
};
