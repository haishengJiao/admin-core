import js from '@eslint/js';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

/** @type {import('eslint').Linter.Config} */
export const javascript = {
  languageOptions: {
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 特性
    globals: {
      ...globals.browser, // 浏览器环境全局变量
      ...globals.es2022, // ES2022 全局变量
      ...globals.node, // Node 环境全局变量
      document: 'readonly', // 明确 document 为只读全局
      navigator: 'readonly', // 明确 navigator 为只读全局
      window: 'readonly', // 明确 window 为只读全局
    },
    parserOptions: {
      ecmaFeatures: { jsx: true }, // 启用 JSX 语法支持
      ecmaVersion: 'latest', // ECMAScript 版本设置为最新
      sourceType: 'module', // 模块类型为 ES module
    },
    sourceType: 'module', // 顶层 sourceType 为 module
  },
  linterOptions: {
    reportUnusedDisableDirectives: true, // 报告未使用的 eslint-disable 指令
  },
  plugins: {
    'unused-imports': pluginUnusedImports, // 注册 unused-imports 插件别名
  },
  rules: {
    ...js.configs.recommended.rules, // 继承官方推荐规则集合
    'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }], // getter/setter 配对的规则
    'array-callback-return': 'error', // 数组回调必须有返回值
    'block-scoped-var': 'error', // 块级作用域内变量使用规则
    'constructor-super': 'error', // 在子类构造函数中必须调用 super
    'default-case-last': 'error', // switch 中的 default 应放在最后
    'dot-notation': ['error', { allowKeywords: true }], // 优先使用点号访问属性
    eqeqeq: ['error', 'always'], // 强制使用 === 和 !==
    'keyword-spacing': 'off', // 关键字前后空格规则关闭（可能由 prettier 处理）
    'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }], // 构造函数大写校验
    'no-alert': 'error', // 禁止使用 alert/confirm/prompt
    'no-array-constructor': 'error', // 禁止使用 Array 构造器
    'no-async-promise-executor': 'error', // 禁止在 Promise 执行器中使用 async 函数
    'no-caller': 'error', // 禁止使用 arguments.caller 或 callee
    'no-case-declarations': 'error', // switch case 中的声明必须用块包裹
    'no-class-assign': 'error', // 禁止给类重新赋值
    'no-compare-neg-zero': 'error', // 禁止与 -0 比较
    'no-cond-assign': ['error', 'always'], // 条件语句中禁止赋值
    'no-console': ['error', { allow: ['warn', 'error'] }], // 禁止 console（允许 warn/error）
    'no-const-assign': 'error', // 禁止重新分配 const 变量
    'no-control-regex': 'error', // 禁止控制字符出现在正则中
    'no-debugger': 'error', // 禁止 debugger
    'no-delete-var': 'error', // 禁止删除变量
    'no-dupe-args': 'error', // 函数参数不能重名
    'no-dupe-class-members': 'error', // 类成员不能重名
    'no-dupe-keys': 'error', // 对象字面量的键不能重复
    'no-duplicate-case': 'error', // switch 中的 case 不能重复
    'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空语句块，但允许空的 catch
    'no-empty-character-class': 'error', // 禁止空的正则字符类
    'no-empty-function': 'off', // 允许空函数（可由其他规则或 formatter 处理）
    'no-empty-pattern': 'error', // 禁止空的解构模式
    'no-eval': 'error', // 禁止 eval
    'no-ex-assign': 'error', // 禁止给异常赋值
    'no-extend-native': 'error', // 禁止扩展原生对象
    'no-extra-bind': 'error', // 禁止不必要的 bind 调用
    'no-extra-boolean-cast': 'error', // 禁止不必要的布尔转换
    'no-fallthrough': 'error', // 禁止 switch 穿透
    'no-func-assign': 'error', // 禁止重新分配函数声明
    'no-global-assign': 'error', // 禁止给全局对象重新赋值
    'no-implied-eval': 'error', // 禁止通过字符串进行隐式 eval
    'no-import-assign': 'error', // 禁止给 import 的绑定赋值
    'no-invalid-regexp': 'error', // 禁止无效的正则表达式
    'no-irregular-whitespace': 'error', // 禁止不规则空白
    'no-iterator': 'error', // 禁止使用 __iterator__ or iterator protocol
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }], // 禁止标签语句
    'no-lone-blocks': 'error', // 禁止多余的块
    'no-loss-of-precision': 'error', // 禁止数字字面量精度丢失
    'no-misleading-character-class': 'error', // 禁止误导性的字符类
    'no-multi-str': 'error', // 禁止多行字符串的反斜杠语法
    'no-new': 'error', // 禁止使用 new 调用不产生对象的构造函数
    'no-new-func': 'error', // 禁止 Function 构造器
    'no-new-object': 'error', // 禁止使用 Object 构造器
    'no-new-symbol': 'error', // 禁止使用 Symbol 作为构造函数
    'no-new-wrappers': 'error', // 禁止使用包装对象（new String/Number/Boolean）
    'no-obj-calls': 'error', // 禁止把全局对象当函数调用
    'no-octal': 'error', // 禁止八进制字面量
    'no-octal-escape': 'error', // 禁止八进制转义
    'no-proto': 'error', // 禁止使用 __proto__
    'no-prototype-builtins': 'error', // 禁止直接调用对象原型的方法
    'no-redeclare': ['error', { builtinGlobals: false }], // 禁止重复声明变量
    'no-regex-spaces': 'error', // 禁止正则中多余空格
    'no-restricted-globals': [
      'error',
      { message: 'Use `globalThis` instead.', name: 'global' },
      { message: 'Use `globalThis` instead.', name: 'self' },
    ], // 限制使用特定全局变量并给出替代建议
    'no-restricted-properties': [
      'error',
      { message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.', property: '__proto__' },
      { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
      { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
      { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
      { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' },
    ], // 限制使用特定属性并建议替代方案
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
      'TSEnumDeclaration[const=true]',
      'TSExportAssignment',
    ], // 限制使用特定语法节点
    'no-self-assign': ['error', { props: true }], // 禁止将变量赋值给自己
    'no-self-compare': 'error', // 禁止自己和自己比较
    'no-sequences': 'error', // 禁止逗号操作符
    'no-shadow-restricted-names': 'error', // 禁止覆盖受限名字
    'no-sparse-arrays': 'error', // 禁止稀疏数组
    'no-template-curly-in-string': 'error', // 禁止在普通字符串中使用模板占位符
    'no-this-before-super': 'error', // 在构造函数中应先调用 super
    'no-throw-literal': 'error', // 抛出错误应为 Error 对象
    'no-undef': 'off', // 关闭 no-undef（TypeScript 会处理未定义变量）
    'no-undef-init': 'error', // 禁止将变量初始化为 undefined
    'no-unexpected-multiline': 'error', // 防止因换行引起的歧义
    'no-unmodified-loop-condition': 'error', // 禁止循环条件在循环体未修改的情况
    'no-unneeded-ternary': ['error', { defaultAssignment: false }], // 禁止不必要的三元表达式
    'no-unreachable': 'error', // 禁止不可达代码
    'no-unreachable-loop': 'error', // 禁止无法终止的循环
    'no-unsafe-finally': 'error', // 在 finally 中避免控制流改变
    'no-unsafe-negation': 'error', // 禁止在 in 或 instanceof 前用 !
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true }], // 禁止无用的表达式
    'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true, vars: 'all' }], // 检测未使用的变量
    'no-use-before-define': ['error', { classes: false, functions: false, variables: false }], // 使用前定义规则
    'no-useless-backreference': 'error', // 禁止正则的无用反向引用
    'no-useless-call': 'error', // 禁止无意义的 Function.prototype.call/apply
    'no-useless-catch': 'error', // 禁止捕获后直接抛出的无意义 catch
    'no-useless-computed-key': 'error', // 禁止不必要的计算属性键
    'no-useless-constructor': 'error', // 禁止无意义的构造函数
    'no-useless-rename': 'error', // 禁止不必要的重命名
    'no-useless-return': 'error', // 禁止无意义的 return
    'no-var': 'error', // 禁止 var，使用 let/const
    'no-with': 'error', // 禁止 with 语句
    'object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }], // 强制对象简写
    'one-var': ['error', { initialized: 'never' }], // 单一变量声明规则
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }], // 优先使用箭头函数作为回调
    'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }], // 优先使用 const
    'prefer-exponentiation-operator': 'error', // 优先使用 ** 而不是 Math.pow
    'prefer-promise-reject-errors': 'error', // Promise.reject 应传 Error 对象
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }], // 优先使用正则字面量
    'prefer-rest-params': 'error', // 优先使用剩余参数而非 arguments
    'prefer-spread': 'error', // 优先使用扩展运算符
    'prefer-template': 'error', // 优先使用模板字符串
    'space-before-function-paren': 'off', // 函数名与括号间距规则关闭
    'spaced-comment': 'error', // 注释前后的空格规则
    'symbol-description': 'error', // Symbol 应提供描述
    'unicode-bom': ['error', 'never'], // 禁止文件存在 BOM
    'unused-imports/no-unused-vars': [
      'error',
      { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
    ], // 检测未使用的变量（配合 unused-imports）
    'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }], // 使用 isNaN 检查 NaN
    'valid-typeof': ['error', { requireStringLiterals: true }], // typeof 比较应与字符串字面量比较
    'vars-on-top': 'error', // var 声明应在作用域顶部
    yoda: ['error', 'never'], // 禁止 Yoda 条件（把字面量放在左侧）
  },
};
