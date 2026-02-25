import fs from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PluginOption } from 'vite';

const getBoolean = (value: string | undefined) => value === 'true';

const getNoscriptHtml = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const noscriptPath = join(__dirname, './noscript.html');
  return await fs.readFileSync(noscriptPath, 'utf-8');
};

/**
 * 插入noscript标签
 * @param env 环境变量
 */
export default async function injectNoscriptPlugin(env: Record<string, string | undefined>): Promise<PluginOption | undefined> {
  const virtualModuleId = 'virtual:inject-app-noscript';
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;
  return {
    name: 'vite-plugin-inject-app-noscript',
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    load(id) {
      if (id === resolvedVirtualModuleId)
        return {
          code: `
            export function removeAppNoscript() {
              const noscriptElement = document.querySelector('#app-noscript');
              if (noscriptElement) {
                noscriptElement.remove();
                document.querySelectorAll('[data-app-noscript^="inject"]').forEach(el => el.remove())
              }
            }
          `,
          map: null,
        };
    },
    enforce: 'pre',
    transformIndexHtml: {
      handler: async (html: string) => {
        if (!getBoolean(env.VITE_INJECT_APP_NO_SCRIPT)) return;

        const noscriptHtml = await getNoscriptHtml();
        const reg = /<\/body>/;
        return html.replace(reg, `${noscriptHtml}\n</body>`);
      },
      order: 'pre',
    },
  };
}
