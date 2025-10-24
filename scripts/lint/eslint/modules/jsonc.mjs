import pluginJsonc from 'eslint-plugin-jsonc';
import parserJsonc from 'jsonc-eslint-parser';

/** @type {import('eslint').Linter.Config} */
export const jsonc = [
  {
    // 针对所有JSON相关文件的通用规则
    files: ['**/*.json', '**/*.json5', '**/*.jsonc', '*.code-workspace'], // 匹配所有JSON、JSON5、JSONC文件以及VSCode工作区配置文件
    languageOptions: {
      parser: parserJsonc,
    },
    plugins: {
      jsonc: pluginJsonc,
    },
    rules: {
      'jsonc/no-bigint-literals': 'error', // 禁止在JSON中使用BigInt字面量，因为JSON不支持BigInt类型
      'jsonc/no-binary-expression': 'error', // 禁止在JSON中使用二进制表达式，保持JSON的纯数据格式
      'jsonc/no-binary-numeric-literals': 'error', // 禁止在JSON中使用二进制数字字面量（如0b1010）
      'jsonc/no-dupe-keys': 'error', // 禁止JSON中出现重复的键名，避免数据覆盖和歧义
      'jsonc/no-escape-sequence-in-identifier': 'error', // 禁止在标识符中使用转义序列，保持JSON的可读性
      'jsonc/no-floating-decimal': 'error', // 禁止使用浮点小数格式（如.5或5.），要求完整的数字格式
      'jsonc/no-hexadecimal-numeric-literals': 'error', // 禁止在JSON中使用十六进制数字字面量（如0xFF）
      'jsonc/no-infinity': 'error', // 禁止在JSON中使用Infinity值，因为JSON不支持该值
      'jsonc/no-multi-str': 'error', // 禁止使用多行字符串（反斜线换行），保持JSON格式的纯洁性
      'jsonc/no-nan': 'error', // 禁止在JSON中使用NaN值，因为JSON不支持该值
      'jsonc/no-number-props': 'error', // 禁止使用数字作为对象属性名，要求使用字符串格式
      'jsonc/no-numeric-separators': 'error', // 禁止在JSON中使用数字分隔符（如1_000_000），保持JSON的兼容性
      'jsonc/no-octal': 'error', // 禁止在JSON中使用八进制数字，避免歧义和错误
      'jsonc/no-octal-escape': 'error', // 禁止在JSON中使用八进制转义序列，保持字符串的标准格式
      'jsonc/no-octal-numeric-literals': 'error', // 禁止在JSON中使用八进制数字字面量（如0o777）
      'jsonc/no-parenthesized': 'error', // 禁止在JSON中使用括号表达式，保持JSON的简洁性
      'jsonc/no-plus-sign': 'error', // 禁止在JSON数字前使用加号（+），保持标准JSON格式
      'jsonc/no-regexp-literals': 'error', // 禁止在JSON中使用正则表达式字面量，因为JSON不支持正则类型
      'jsonc/no-sparse-arrays': 'error', // 禁止在JSON中使用稀疏数组（包含空元素的数组）
      'jsonc/no-template-literals': 'error', // 禁止在JSON中使用模板字符串，要求使用普通字符串
      'jsonc/no-undefined-value': 'error', // 禁止在JSON中使用undefined值，因为JSON不支持该值
      'jsonc/no-unicode-codepoint-escapes': 'error', // 禁止在JSON中使用Unicode码点转义，保持跨平台兼容性
      'jsonc/no-useless-escape': 'error', // 禁止在JSON中使用无用的转义字符，保持代码简洁
      'jsonc/space-unary-ops': 'error', // 强制一元操作符周围的空格规范，保持格式一致性
      'jsonc/valid-json-number': 'error', // 确保 JSON 中的数字格式符合标准，避免解析错误
      'jsonc/vue-custom-block/no-parsing-error': 'error', // 禁止Vue自定义块中的JSON解析错误，确保Vue组件的正确性
    },
  },
  {
    // 针对TypeScript配置文件的特殊规则
    files: ['**/tsconfig.json', '**/scripts/tsconfig/tsconfig.*.json'], // 匹配所有TypeScript配置文件
    rules: {
      // 强制JSON对象键名排序，保持配置文件的一致性和可维护性
      'jsonc/sort-keys': [
        'error',
        {
          // tsconfig.json根级属性排序
          order: ['extends', 'compilerOptions', 'references', 'files', 'include', 'exclude'], // 定义tsconfig.json根级属性的排序：继承、编译选项、引用、文件、包含、排除
          pathPattern: '^$', // 适用于根路径（空字符串表示根级）
        },
        {
          // compilerOptions内部属性排序
          order: [
            /* Projects */
            'incremental',
            'composite',
            'tsBuildInfoFile',
            'disableSourceOfProjectReferenceRedirect',
            'disableSolutionSearching',
            'disableReferencedProjectLoad',
            /* Language and Environment */
            'target',
            'jsx',
            'jsxFactory',
            'jsxFragmentFactory',
            'jsxImportSource',
            'lib',
            'moduleDetection',
            'noLib',
            'reactNamespace',
            'useDefineForClassFields',
            'emitDecoratorMetadata',
            'experimentalDecorators',
            /* Modules */
            'baseUrl',
            'rootDir',
            'rootDirs',
            'customConditions',
            'module',
            'moduleResolution',
            'moduleSuffixes',
            'noResolve',
            'paths',
            'resolveJsonModule',
            'resolvePackageJsonExports',
            'resolvePackageJsonImports',
            'typeRoots',
            'types',
            'allowArbitraryExtensions',
            'allowImportingTsExtensions',
            'allowUmdGlobalAccess',
            /* JavaScript Support */
            'allowJs',
            'checkJs',
            'maxNodeModuleJsDepth',
            /* Type Checking */
            'strict',
            'strictBindCallApply',
            'strictFunctionTypes',
            'strictNullChecks',
            'strictPropertyInitialization',
            'allowUnreachableCode',
            'allowUnusedLabels',
            'alwaysStrict',
            'exactOptionalPropertyTypes',
            'noFallthroughCasesInSwitch',
            'noImplicitAny',
            'noImplicitOverride',
            'noImplicitReturns',
            'noImplicitThis',
            'noPropertyAccessFromIndexSignature',
            'noUncheckedIndexedAccess',
            'noUnusedLocals',
            'noUnusedParameters',
            'useUnknownInCatchVariables',
            /* Emit */
            'declaration',
            'declarationDir',
            'declarationMap',
            'downlevelIteration',
            'emitBOM',
            'emitDeclarationOnly',
            'importHelpers',
            'importsNotUsedAsValues',
            'inlineSourceMap',
            'inlineSources',
            'mapRoot',
            'newLine',
            'noEmit',
            'noEmitHelpers',
            'noEmitOnError',
            'outDir',
            'outFile',
            'preserveConstEnums',
            'preserveValueImports',
            'removeComments',
            'sourceMap',
            'sourceRoot',
            'stripInternal',
            /* Interop Constraints */
            'allowSyntheticDefaultImports',
            'esModuleInterop',
            'forceConsistentCasingInFileNames',
            'isolatedModules',
            'preserveSymlinks',
            'verbatimModuleSyntax',
            /* Completeness */
            'skipDefaultLibCheck',
            'skipLibCheck',
          ],
          pathPattern: '^compilerOptions$', // 适用于compilerOptions路径
        },
      ],
    },
  },
  {
    // 针对package.json文件的特殊规则
    files: ['**/package.json'], // 匹配所有package.json文件
    rules: {
      'jsonc/sort-array-values': [
        // 强制数组值按字母顺序排列，保持一致性
        'error',
        {
          order: { type: 'asc' }, // 按升序排列
          pathPattern: '^files$|^pnpm.neverBuiltDependencies$', // 适用于files字段和pnpm.neverBuiltDependencies字段
        },
      ],
      'jsonc/sort-keys': [
        // 强制package.json中对象键名排序，保持项目配置的标准化
        'error',
        {
          // package.json根级属性排序
          order: [
            'name',
            'version',
            'description',
            'private',
            'keywords',
            'homepage',
            'bugs',
            'repository',
            'license',
            'author',
            'contributors',
            'categories',
            'funding',
            'type',
            'scripts',
            'files',
            'sideEffects',
            'bin',
            'main',
            'module',
            'unpkg',
            'jsdelivr',
            'types',
            'typesVersions',
            'imports',
            'exports',
            'publishConfig',
            'icon',
            'activationEvents',
            'contributes',
            'peerDependencies',
            'peerDependenciesMeta',
            'dependencies',
            'optionalDependencies',
            'devDependencies',
            'engines',
            'packageManager',
            'pnpm',
            'overrides',
            'resolutions',
            'husky',
            'simple-git-hooks',
            'lint-staged',
            'eslintConfig',
          ],
          pathPattern: '^$', // 适用于根路径
        },
        {
          // 依赖包名按字母顺序排列
          order: { type: 'asc' }, // 按升序排列
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$', // 适用于所有类型的依赖字段
        },
        {
          // 依赖覆盖配置按字母顺序排列
          order: { type: 'asc' }, // 按升序排列
          pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$', // 适用于依赖覆盖相关字段
        },
        {
          // ：exports字段内部排序
          order: ['types', 'import', 'require', 'default'], // 定义exports字段内的排序：类型、ES模块、CommonJS、默认
          pathPattern: '^exports.*$', // 适用于exports字段及其子字段
        },
      ],
    },
  },
];
