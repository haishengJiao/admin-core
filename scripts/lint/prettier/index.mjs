/** @type {import('prettier').Options} */
export default {
  endOfLine: 'auto', // 行尾符号：auto表示保持原有的行尾符号（CRLF/LF），避免跨平台换行符冲突

  // 针对特定文件类型的配置覆盖规则
  overrides: [
    {
      files: ['*.json5'], // 匹配所有.json5文件
      options: {
        quoteProps: 'preserve', // 保持JSON5中属性名的引号状态，不自动添加或删除
        singleQuote: false, // JSON5文件中使用双引号而不是单引号
      },
    },
  ],

  // Tailwind CSS插件（如果需要Tailwind CSS支持，请先安装 prettier-plugin-tailwindcss）
  // plugins: ['prettier-plugin-tailwindcss'],

  printWidth: 160, // 每行最大字符数，超过此长度会自动换行，建议80-120之间
  proseWrap: 'never', // Markdown文档中的文本换行方式：never表示不自动换行，保持原有格式
  semi: true, // 语句末尾是否添加分号，true表示始终添加分号
  singleQuote: true, // 字符串是否使用单引号，true表示优先使用单引号（字符串中包含单引号时会自动使用双引号）
  trailingComma: 'all', // 尾随逗号规则：all表示在所有可能的地方添加尾随逗号（对象、数组、函数参数等）
  tabWidth: 2, // 缩进空格数，每个缩进级别使用的空格数量
  useTabs: false, // 是否使用制表符缩进，false表示使用空格缩进
  bracketSpacing: true, // 对象字面量的大括号内是否添加空格，true表示 { foo: bar } 而不是 {foo: bar}
  bracketSameLine: false, // 多行JSX元素的>是否与最后一行属性放在同一行，false表示单独占一行
  arrowParens: 'avoid', // 箭头函数参数的括号：avoid表示只有一个参数时省略括号 x => x，多个参数时添加括号 (x, y) => x + y
  vueIndentScriptAndStyle: false, // Vue文件中的<script>和<style>标签内容是否缩进，false表示不额外缩进
};
