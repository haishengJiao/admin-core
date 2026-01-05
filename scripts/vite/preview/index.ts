import type { UserConfig } from 'vite';

export default (env: Record<string, string>): UserConfig['preview'] => {
  return {
    port: Number(env.VITE_PREVIEW_PORT),
    open: true,
  };
};
