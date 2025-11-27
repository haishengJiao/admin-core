/** @type {import('eslint').Linter.Config} */
export const ignores = {
  ignores: [
    // Dependencies
    '**/node_modules/**', // 忽略npm/yarn/pnpm依赖包目录

    // Build outputs
    '**/dist/**', // 忽略构建输出目录
    '**/build/**', // 忽略构建输出目录
    '**/.vite/**', // 忽略Vite缓存目录
    '**/.nuxt/**', // 忽略Nuxt.js缓存目录
    '**/.next/**', // 忽略Next.js缓存目录
    '**/.vercel/**', // 忽略Vercel部署缓存目录
    '**/.netlify/**', // 忽略Netlify部署缓存目录

    // Coverage reports
    '**/coverage/**', // 忽略代码覆盖率报告目录
    '**/.nyc_output/**', // 忽略NYC代码覆盖率工具输出目录

    // Environment files
    '**/.env', // 忽略环境变量文件
    '**/.env.local', // 忽略本地环境变量文件
    '**/.env.*.local', // 忽略所有本地环境变量文件

    // Logs
    '**/*.log', // 忽略所有日志文件
    '**/npm-debug.log*', // 忽略npm调试日志文件
    '**/yarn-debug.log*', // 忽略yarn调试日志文件
    '**/yarn-error.log*', // 忽略yarn错误日志文件
    '**/pnpm-debug.log*', // 忽略pnpm调试日志文件

    // Lock files
    '**/package-lock.json', // 忽略npm锁定文件
    '**/yarn.lock', // 忽略yarn锁定文件
    '**/pnpm-lock.yaml', // 忽略pnpm锁定文件

    // OS generated files
    '**/.DS_Store', // 忽略macOS系统生成的文件
    '**/.DS_Store?', // 忽略macOS系统生成的文件变体
    '**/._*', // 忽略macOS系统生成的隐藏文件
    '**/.Spotlight-V100', // 忽略macOS Spotlight搜索索引文件
    '**/.Trashes', // 忽略macOS回收站文件
    '**/ehthumbs.db', // 忽略Windows缩略图缓存文件
    '**/Thumbs.db', // 忽略Windows缩略图缓存文件

    // IDE
    '**/.idea/**', // 忽略JetBrains IDE配置目录
    '**/*.swp', // 忽略Vim交换文件
    '**/*.swo', // 忽略Vim交换文件

    // Temporary files
    '**/*.tmp', // 忽略临时文件
    '**/*.temp', // 忽略临时文件

    // Images
    '**/*.jpg', // 忽略JPEG图片文件
    '**/*.jpeg', // 忽略JPEG图片文件
    '**/*.png', // 忽略PNG图片文件
    '**/*.gif', // 忽略GIF图片文件
    '**/*.bmp', // 忽略BMP图片文件
    '**/*.tiff', // 忽略TIFF图片文件
    '**/*.ico', // 忽略图标文件
    '**/*.webp', // 忽略WebP图片文件
    '**/*.avif', // 忽略AVIF图片文件

    // Fonts
    '**/*.woff', // 忽略WOFF字体文件
    '**/*.woff2', // 忽略WOFF2字体文件
    '**/*.eot', // 忽略EOT字体文件
    '**/*.ttf', // 忽略TTF字体文件
    '**/*.otf', // 忽略OTF字体文件

    // Audio/Video
    '**/*.mp3', // 忽略MP3音频文件
    '**/*.mp4', // 忽略MP4视频文件
    '**/*.avi', // 忽略AVI视频文件
    '**/*.mov', // 忽略MOV视频文件
    '**/*.wmv', // 忽略WMV视频文件
    '**/*.flv', // 忽略FLV视频文件
    '**/*.webm', // 忽略WebM视频文件
    '**/*.ogg', // 忽略OGG音频文件
    '**/*.wav', // 忽略WAV音频文件

    // Documents
    '**/*.pdf', // 忽略PDF文档文件
    '**/*.doc', // 忽略Word文档文件
    '**/*.docx', // 忽略Word文档文件
    '**/*.xls', // 忽略Excel文档文件
    '**/*.xlsx', // 忽略Excel文档文件
    '**/*.ppt', // 忽略PowerPoint文档文件
    '**/*.pptx', // 忽略PowerPoint文档文件

    // Archives
    '**/*.zip', // 忽略ZIP压缩文件
    '**/*.rar', // 忽略RAR压缩文件
    '**/*.7z', // 忽略7z压缩文件
    '**/*.tar', // 忽略TAR压缩文件
    '**/*.gz', // 忽略GZ压缩文件

    // Changelog and license
    '**/CHANGELOG*.md', // 忽略变更日志文件
    '**/LICENSE*', // 忽略许可证文件
    '**/README*.md', // 忽略说明文档文件
    '**/*.md', // 忽略所有Markdown文件

    '**/.husky/**',
    '**/..cspellcache',

    '**/auto-imports.d.ts',
    '**/components.d.ts',
  ],
};
