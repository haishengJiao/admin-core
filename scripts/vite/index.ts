import { defineConfig, loadEnv } from 'vite';

import plugins from './plugins';
import preview from './preview';
import resolve from './resolve';
import server from './server';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './env') as Record<string, string | undefined>;
  // const a: ImportMetaEnv = import.meta;
  return {
    envDir: './env',
    base: env.VITE_BASE,
    plugins: plugins(env),
    resolve,
    server: server(env),
    preview: preview(env),
  };
});
