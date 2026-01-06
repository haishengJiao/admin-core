import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import vueDevTools from 'vite-plugin-vue-devtools';

import injectAppLoadingPlugin from './modules/inject-app-loading';

import type { UserConfig } from 'vite';

export default (env: Record<string, string>): UserConfig['plugins'] => {
  return [
    vue(),
    vueJsx(),
    vueDevTools(),
    injectAppLoadingPlugin(env),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          // prefix: 'i',  前缀默认是 ‘i’
          // prefix: 'icon',   可以改成其他前缀
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    codeInspectorPlugin({
      bundler: 'vite',
    }),
  ];
};
