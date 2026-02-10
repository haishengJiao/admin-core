interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  /** 应用标题 */
  readonly VITE_APP_TITLE?: string;

  /** 应用路径 */
  readonly VITE_BASE?: string;

  /** 接口地址 */
  readonly VITE_API_URL?: string;

  /** 本地服务端口 */
  readonly VITE_SERVER_PORT?: string;

  /** 预览服务端口 */
  readonly VITE_PREVIEW_PORT?: string;

  /** 是否注入应用加载动画 */
  readonly VITE_INJECT_APP_LOADING?: boolean;

  /** 是否加载vue devtools */
  readonly VITE_LOAD_VUE_DEVTOOLS?: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
