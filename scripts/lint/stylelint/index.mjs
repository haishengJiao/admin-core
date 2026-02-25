/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'], // 继承标准配置和CSS属性排序配置
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md'], // 忽略非样式文件，避免误检查
  overrides: [
    {
      // CSS文件的特殊处理配置
      files: ['*.css', '**/*.css'], // 匹配CSS文件
    },
    {
      // Vue和HTML文件的特殊处理配置
      customSyntax: 'postcss-html', // 使用postcss-html解析器处理Vue模板中的样式
      files: ['*.(html|vue)', '**/*.(html|vue)'], // 匹配HTML和Vue文件
      rules: {
        'selector-pseudo-class-no-unknown': [
          // 检查未知伪类选择器
          true,
          {
            ignorePseudoClasses: ['global', 'deep'], // 忽略Vue特有的:global和:deep伪类
          },
        ],
        'selector-pseudo-element-no-unknown': [
          // 检查未知伪元素选择器
          true,
          {
            ignorePseudoElements: ['v-global', 'v-slotted'], // 只允许这些Vue伪元素，移除v-deep
          },
        ],
        // 禁止使用已弃用的Vue样式穿透语法，但允许使用:deep()
        'selector-disallowed-list': [
          // 禁止使用/deep/、>>>、::v-deep深度选择器
          ['/\\/deep\\/.+/', '/>>>.+/', '/::v-deep.+/'],
          { message: '🚫 已弃用的Vue样式穿透语法，请使用 :deep() 代替' },
        ],
        'declaration-property-value-no-unknown': [true, { ignoreProperties: { '/.+/': ['/^v-bind\\(.*\\)$/'] } }], // 允许使用v-bind()函数作为属性值，支持动态样式绑定
      },
    },
    // 如果需要 scss 支持，请先安装 "postcss-scss": "^4.0.9", "sass": "^1.93.2", "stylelint-config-recommended-scss": "^16.0.2", "stylelint-scss": "^6.12.1",
    // check 检查需要添加 scss stylelint \"**/*.{css,scss,vue,html}\" --fix --cache
    // 如果启动 scss lint，需要在 stylelint.config.js 中添加以下配置
    // {
    //   // SCSS文件的特殊处理配置
    //   customSyntax: 'postcss-scss', // 使用postcss-scss解析器处理SCSS语法
    //   extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue/scss'], // 继承SCSS推荐配置
    //   files: ['*.scss', '**/*.scss'], // 匹配所有SCSS文件
    //   rules: {
    //     // 控制@规则前的空行，但忽略else和if规则
    //     'at-rule-empty-line-before': [
    //       'always',
    //       {
    //         ignore: ['blockless-after-blockless', 'inside-block'], // 忽略块内和无块规则后的空行要求
    //         ignoreAtRules: ['else'], // 特别忽略else规则前的空行要求
    //       },
    //     ],
    //   },
    // },
  ],
  plugins: [
    'stylelint-order', // CSS属性排序插件，确保属性按逻辑顺序排列
    '@stylistic/stylelint-plugin', // 样式格式化插件，提供代码风格检查
    'stylelint-prettier', // Prettier集成插件，统一代码格式化
    // 如果启动 scss lint，需要在 stylelint.config.js 中添加以下配置
    // 'stylelint-scss', // SCSS语法支持插件，增强SCSS语法检查
  ],
  rules: {
    'at-rule-no-deprecated': null, // 禁用弃用@规则检查，允许使用旧版@规则
    'at-rule-no-unknown': [
      // 检查未知@规则，防止拼写错误
      true,
      {
        ignoreAtRules: [
          // 如果启动 scss lint，需要在 stylelint.config.js 中添加以下配置
          //  'extends', // SCSS继承规则
          // 'ignores', // SCSS忽略规则
          // 'include', // SCSS混入包含规则
          // 'mixin', // SCSS混入定义规则
          // 'if', // SCSS条件判断规则
          // 'else', // SCSS条件分支规则
          // 'media', // 媒体查询规则
          // 'for', // SCSS循环规则
          // 'at-root', // SCSS根级输出规则
          // 'function', // SCSS函数定义规则
          // 'each', // SCSS遍历规则
          // 'use', // SCSS模块导入规则
          // 'forward', // SCSS模块转发规则
          // 'return', // SCSS函数返回规则
          'tailwind', // Tailwind CSS基础样式导入
          'apply', // Tailwind CSS样式应用规则
          'variants', // Tailwind CSS变体生成规则
          'responsive', // Tailwind CSS响应式变体规则
          'screen', // Tailwind CSS屏幕断点规则
          'plugin', // Tailwind CSS插件规则
          'theme', // Tailwind CSS主题定义规则
          'reference', // Tailwind CSS引用规则
        ],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null, // 禁用字体族通用关键字检查，允许不指定fallback字体
    'function-no-unknown': null, // 禁用未知函数检查，允许使用SCSS自定义函数
    'import-notation': null, // 禁用导入符号检查，允许灵活的导入语法
    'media-feature-range-notation': null, // 禁用媒体特性范围表示法检查，保持兼容性
    'named-grid-areas-no-invalid': null, // 禁用网格区域名称有效性检查，允许灵活命名
    'no-descending-specificity': null, // 禁用选择器特异性递减检查，允许灵活的CSS结构
    'no-empty-source': [true, { message: '📝 检测到空的样式块，请添加内容或删除' }], // 禁止空的样式源文件或样式块，确保样式标签有实际内容
    'order/order': [
      // CSS属性和规则的排序配置
      [
        // 如果启动 scss lint，需要在 stylelint.config.js 中添加以下配置
        // 'dollar-variables', // SCSS变量声明，放在最前面便于查看
        'custom-properties', // CSS自定义属性(CSS变量)，紧随SCSS变量
        'at-rules', // 一般@规则，如@import等
        'declarations', // 普通CSS属性声明，构成样式主体
        {
          // @supports特性查询规则
          name: 'supports', // 规则名称
          type: 'at-rule', // 规则类型为@规则
        },
        {
          // @media媒体查询规则
          name: 'media', // 规则名称
          type: 'at-rule', // 规则类型为@规则
        },
        // 如果启动 scss lint，需要在 stylelint.config.js 中添加以下配置
        // {
        //   // @include混入包含规则
        //   name: 'include', // 规则名称
        //   type: 'at-rule', // 规则类型为@规则
        // },
        'rules', // 嵌套的CSS规则，放在最后保持层次清晰
      ],
      { severity: 'error' }, // 违反排序规则时报错而非警告
    ],
    'prettier/prettier': true, // 启用Prettier格式化检查，确保代码风格一致
    'rule-empty-line-before': [
      // 规则前空行配置，提高代码可读性
      'always',
      {
        ignore: ['after-comment', 'first-nested'], // 忽略注释后和第一个嵌套规则的空行要求
      },
    ],
    // 如果启动 scss lint，需要在 stylelint.config.js 中添加以下配置
    // // SCSS特定规则：控制@规则前的空行
    // 'scss/at-rule-no-unknown': [
    //   true,
    //   {
    //     ignoreAtRules: [
    //       // 在SCSS文件中忽略的@规则列表
    //       'extends', // SCSS继承规则
    //       'ignores', // SCSS忽略规则
    //       'include', // SCSS混入包含规则
    //       'mixin', // SCSS混入定义规则
    //       'if', // SCSS条件判断规则
    //       'else', // SCSS条件分支规则
    //       'media', // 媒体查询规则
    //       'for', // SCSS循环规则
    //       'at-root', // SCSS根级输出规则
    //       'tailwind', // Tailwind CSS基础样式导入
    //       'apply', // Tailwind CSS样式应用规则
    //       'variants', // Tailwind CSS变体生成规则
    //       'responsive', // Tailwind CSS响应式变体规则
    //       'screen', // Tailwind CSS屏幕断点规则
    //       'function', // SCSS函数定义规则
    //       'each', // SCSS遍历规则
    //       'use', // SCSS模块导入规则
    //       'forward', // SCSS模块转发规则
    //       'return', // SCSS函数返回规则
    //     ],
    //   },
    // ],
    // 'scss/operator-no-newline-after': null, // 禁用SCSS操作符后换行检查，允许灵活的代码格式
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:[.+])?$', // 正则表达式，支持对象前缀(o-)、组件前缀(c-)、工具前缀(u-)等和BEM命名规范
    'selector-not-notation': null, // 禁用:not()选择器表示法检查，允许灵活使用
  },
};
