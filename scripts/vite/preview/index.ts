import type { UserConfig } from 'vite';

export default (env: Record<string, string | undefined>): UserConfig['preview'] => {
  return {
    port: env.VITE_PREVIEW_PORT ? Number(env.VITE_PREVIEW_PORT) : 3001,
    open: true,
  };
};
