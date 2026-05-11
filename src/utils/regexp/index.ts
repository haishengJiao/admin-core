// 匹配以 http 或 https 开头的 URL
export const HTTP_REGEXP = /^https?:\/\/.*$/;

// 匹配 ./langs/语言代码/任意路径.json 格式的文件
export const LOCALE_FILE_PATTERN = /\.\/langs\/([^/]+)\/(.*)\.json$/;
