import tsParser from '@typescript-eslint/parser'; // 引入TypeScript解析器
import pluginVue from 'eslint-plugin-vue'; // 引入Vue.js ESLint插件
import vueParser from 'vue-eslint-parser'; // 引入Vue文件解析器

const flatEssential = pluginVue.configs?.['flat/essential'] || [];
const flatStronglyRecommended = pluginVue.configs?.['flat/strongly-recommended'] || [];
const flatRecommended = pluginVue.configs?.['flat/recommended'] || [];

/** @type {import('eslint').Linter.Config[]} */
export const vue = [
  ...flatEssential, // 从 eslint-plugin-vue 导出的 flat/essential 基础规则集（核心必要规则）
  ...flatStronglyRecommended, // 从 eslint-plugin-vue 导出的 flat/strongly-recommended，包含更严格的推荐规则
  ...flatRecommended, // 从 eslint-plugin-vue 导出的 flat/recommended，包含官方推荐的实用规则集合
  {
    files: ['**/*.vue'], // 匹配Vue单文件组件
    languageOptions: {
      parser: vueParser, // 使用Vue文件解析器
      parserOptions: {
        parser: tsParser, // 在Vue文件中使用TypeScript解析器
        ecmaVersion: 'latest', // 使用最新的ECMAScript版本
        sourceType: 'module', // 源码类型为ES模块
        ecmaFeatures: {
          jsx: true, // 启用JSX语法支持
        },
        extraFileExtensions: ['.vue'], // 额外的文件扩展名
      },
    },
    plugins: {
      vue: pluginVue, // Vue.js ESLint插件
    },
    processor: pluginVue.processors?.['.vue'], // 使用 plugin-vue 的 .vue 处理器，将 SFC 拆分为可被 ESLint 逐部分处理的 AST
    rules: {
      'vue/attribute-hyphenation': ['error', 'always'], // 属性名必须使用kebab-case（不对原生 HTML 元素生效）
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION', // 定义属性：is, v-is
            'LIST_RENDERING', // 列表渲染：v-for
            'CONDITIONALS', // 条件渲染：v-if, v-else-if, v-else, v-show, v-cloak
            'RENDER_MODIFIERS', // 渲染修饰符：v-pre, v-once
            'GLOBAL', // 全局感知：id
            ['UNIQUE', 'SLOT'], // 唯一属性：ref, key, v-slot, slot
            'TWO_WAY_BINDING', // 双向绑定：v-model
            'OTHER_DIRECTIVES', // 其他指令：v-custom-directive
            'OTHER_ATTR', // 其他属性：class, style, 其他自定义属性
            'EVENTS', // 事件：@click, v-on:click
            'CONTENT', // 内容：v-text, v-html
          ],
          alphabetical: true,
        },
      ], // Vue属性排序规则
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }], // Vue块排序规则
      'vue/padding-line-between-blocks': ['error', 'always'], // 代码块之间留有空行
      'vue/component-api-style': ['error', ['script-setup']], //  强制 script 块使用 setup 语法糖
      // 如果启用 scss 建议开启 style 块使用 SCSS
      // 'vue/block-lang': ['error', { script: { lang: 'ts' }, style: { lang: 'scss' } }], // 强制 script 块使用 TypeScript，style 块使用 SCSS
      'vue/block-lang': ['error', { script: { lang: 'ts' } }], // 强制 script 块使用 TypeScript
      'vue/component-name-in-template-casing': ['error', 'PascalCase'], // 模板中组件名使用PascalCase
      'vue/component-options-name-casing': ['error', 'PascalCase'], // 组件选项名使用PascalCase
      'vue/custom-event-name-casing': ['error', 'camelCase'], // 自定义事件名使用camelCase
      'vue/define-macros-order': ['error', { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] }], // Vue定义宏排序规则
      'vue/dot-location': ['error', 'property'], // 点符号位置在属性名前
      'vue/dot-notation': ['error', { allowKeywords: true }], // 强制使用点符号访问属性，允许关键字
      'vue/eqeqeq': ['error', 'smart'], // 在Vue模板中强制使用严格相等
      'vue/html-closing-bracket-newline': 'error', // HTML关闭标签换行规则
      'vue/html-indent': 'off', // 关闭HTML缩进规则（由Prettier处理）
      'vue/html-quotes': ['error', 'double'], // HTML属性使用双引号
      'vue/html-self-closing': [
        'error',
        {
          html: {
            component: 'always', // 组件标签始终自闭合
            normal: 'never', // 普通HTML标签不自闭合
            void: 'always', // 空标签始终自闭合
          },
          math: 'always', // MathML标签始终自闭合
          svg: 'always', // SVG标签始终自闭合
        },
      ], // HTML自闭合标签规则
      'vue/max-attributes-per-line': 'off', // 每行最大属性数规则
      'vue/multi-word-component-names': 'off', // 关闭多单词组件名规则
      'vue/multiline-html-element-content-newline': 'error', // 多行HTML元素内容换行规则
      'vue/no-empty-pattern': 'error', // 禁止空解构模式
      'vue/no-extra-parens': ['error', 'functions'], // 禁止多余的括号（仅在函数中）
      'vue/no-irregular-whitespace': 'error', // 禁止不规则的空白字符
      'vue/no-loss-of-precision': 'error', // 禁止数字精度丢失
      'vue/no-mutating-props': 'error', // 禁止直接修改props，必须通过emit或本地变量
      'vue/no-reserved-component-names': 'off', // 关闭禁止保留组件名规则
      'vue/no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'], // 禁止特定语法：调试语句、标签语句、with语句
      'vue/no-restricted-v-bind': ['error', '/^v-/'], // 禁止特定v-bind用法
      'vue/no-sparse-arrays': 'error', // 禁止稀疏数组
      'vue/no-unused-components': 'error', // 禁止未使用的组件
      'vue/no-unused-refs': 'error', // 禁止未使用的模板引用
      'vue/no-unused-vars': 'error', // 禁止模板中未使用的变量
      'vue/no-useless-v-bind': 'error', // 禁止无用的v-bind（不对原生 HTML 元素生效）
      'vue/object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }], // 对象简写规则，始终使用简写，避免使用引号，不忽略构造函数
      'vue/one-component-per-file': 'error', // 每个文件只包含一个组件
      'vue/prefer-import-from-vue': 'error', // 优先从Vue主包导入
      'vue/prefer-separate-static-class': 'error', // 优先使用分离的静态class
      'vue/prefer-template': 'error', // 优先使用模板字符串
      'vue/prop-name-casing': ['error', 'camelCase'], // prop名称使用camelCase
      'vue/require-default-prop': 'error', // 要求prop有默认值
      'vue/require-explicit-emits': 'error', // 要求显式定义emits
      'vue/require-prop-types': 'off', // 关闭要求prop类型规则
      'vue/singleline-html-element-content-newline': 'off', // 关闭单行HTML元素内容换行规则
      'vue/space-infix-ops': 'error', // 中缀操作符周围的空格
      'vue/space-unary-ops': ['error', { nonwords: false, words: true }], // 一元操作符的空格规则
      'vue/v-on-event-hyphenation': ['error', 'always', { autofix: true }], // 事件名命名规则，始终使用连字符，自动修复（不对原生 HTML 元素生效）
    },
  },
];
