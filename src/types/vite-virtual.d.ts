declare module 'virtual:inject-app-loading' {
  /** 移除应用加载动画 */
  export const removeAppLoading: () => void;
}

declare module 'virtual:inject-app-noscript' {
  /** 移除应用 noscript 标签 */
  export const removeAppNoscript: () => void;
}

declare module 'virtual:svg-icons-register' {
  /** 注册 SVG 图标 */
  const register: () => void;
  export default register;
}
