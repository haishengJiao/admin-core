# Admin Core

基于 Vue 3 + TypeScript + Vite 的管理系统核心项目。

## 代码规范

本项目基于

### ESLint 配置

- 基于 TypeScript 和 Vue 3 的最佳实践
- 支持 Vue SFC (Single File Components)
- 集成 Prettier 格式化
- 导入排序和优化

### Stylelint 配置

- CSS/SCSS 代码风格检查
- Vue 单文件组件样式支持
- CSS 属性排序优化
- 支持 SCSS 语法和 Tailwind CSS
- 集成 Prettier 格式化

### Prettier 配置

- 单引号
- 分号结尾
- 尾随逗号
- 行宽 80 字符
- 自动换行优化

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 类型检查
npm run type-check

# 代码检查
npm run lint:check

# 代码检查并自动修复
npm run lint

# 样式检查
npm run lint:style:check

# 样式检查并自动修复
npm run lint:style

# 代码格式化检查
npm run format:check

# 代码格式化
npm run format
```

## VSCode 集成

项目已配置 VSCode 设置：

- 保存时自动格式化
- ESLint 自动修复
- 推荐的扩展插件

推荐安装的扩展：

- Prettier - Code formatter
- ESLint
- Stylelint
- Vue Language Features (Volar)
- TypeScript Vue Plugin
- Tailwind CSS IntelliSense

## 配置文件说明

- `eslint.config.mjs` - ESLint 配置
- `stylelint.config.mjs` - Stylelint 配置
- `.prettierrc.mjs` - Prettier 配置
- `.prettierignore` - Prettier 忽略文件
- `.vscode/settings.json` - VSCode 编辑器设置
- `.vscode/extensions.json` - VSCode 推荐扩展

## 代码规范说明

### Vue 组件规范

- 组件名使用 PascalCase
- Props 使用 camelCase
- 事件名使用 kebab-case
- 模板中组件使用 PascalCase
- 文件顺序：script -> template -> style

### CSS/SCSS 规范

- 使用 BEM 命名约定
- CSS 属性按类型排序（变量、属性、媒体查询、嵌套规则）
- 支持 SCSS 特性（变量、混合、嵌套）
- 兼容 Tailwind CSS 的 @规则
- Vue 组件中的 scoped 样式支持

### TypeScript 规范

- 优先使用 type 而非 interface（可配置）
- 允许 any 类型（开发阶段）
- 未使用的变量以 `_` 开头
- 严格的空值检查

### 导入规范

- 自动排序导入语句
- 按类型分组（内置 -> 外部 -> 内部 -> 相对）
- 字母序排列

## 项目结构

```
admin-core/
├── .vscode/              # VSCode 配置
├── src/                  # 源代码
│   ├── App.vue          # 根组件
│   └── main.ts          # 入口文件
├── .prettierrc.mjs      # Prettier 配置
├── .prettierignore      # Prettier 忽略文件
├── eslint.config.mjs    # ESLint 配置
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```
