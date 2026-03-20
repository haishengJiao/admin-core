/**
 * 下载文本文件
 * @param url - 文件的 Blob URL
 * @param filename - 下载的文件名
 * @returns Promise<boolean> - 下载成功返回 true，失败返回错误
 */
export const downloadTextFile = (url: string, filename: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * 下载 CSS 文件
 * @param cssContent - CSS 文件内容
 * @param filename - 下载的文件名（应以 .css 结尾）
 * @returns Promise<boolean> - 下载成功返回 true，失败返回错误
 */
export const downloadCssFile = (cssContent: string, filename: string): Promise<boolean> => {
  try {
    const blob = new Blob([cssContent], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    return downloadTextFile(url, filename);
  } catch (error) {
    return Promise.reject(error);
  }
};
