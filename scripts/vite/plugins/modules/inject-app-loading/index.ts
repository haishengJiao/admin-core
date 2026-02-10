import fs from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PluginOption } from 'vite';

const getBoolean = (value: string | undefined) => value === 'true';

const getAppLoadingHtml = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const appLoadingPath = join(__dirname, './loading.html');
  return await fs.readFileSync(appLoadingPath, 'utf-8');
};

/**
 * 插入app-loading
 * @param env 环境变量
 */
export default async function injectAppLoadingPlugin(env: Record<string, string | undefined>): Promise<PluginOption | undefined> {
  const virtualModuleId = 'virtual:inject-app-loading';
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;
  return {
    name: 'vite-plugin-inject-app-loading',
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    load(id) {
      if (id === resolvedVirtualModuleId)
        return {
          code: `
            export function removeAppLoading() {
              const loadingElement = document.querySelector('#app-loading');
              if (loadingElement) {
                setTimeout(() => {
                  loadingElement.classList.add('hidden');
                },100)
                const injectLoadingElements = document.querySelectorAll('[data-app-loading^="inject"]');
                loadingElement.addEventListener('transitionend', () => {
                  loadingElement.remove();
                  injectLoadingElements.forEach(el => el.remove())
                },
                { once: true }
              )};
            }
          `,
          map: null,
        };
    },
    enforce: 'pre',
    transformIndexHtml: {
      handler: async (html: string) => {
        if (!getBoolean(env.VITE_INJECT_APP_LOADING)) return;

        const loadingHtml = await getAppLoadingHtml();
        const injectScript = `
          <script data-app-loading="inject-js">
            var theme = localStorage.getItem('theme');
            document.documentElement.classList.toggle('dark', /dark/.test(theme));
          </script>
        `;
        const reg = /<\/body>/;
        return html.replace(reg, `${injectScript}\n${loadingHtml}\n</body>`);
      },
      order: 'pre',
    },
  };
}
