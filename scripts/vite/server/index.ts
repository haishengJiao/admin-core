import type { UserConfig } from 'vite';

export default (env: Record<string, string | undefined>): UserConfig['server'] => {
  return {
    port: env.VITE_SERVER_PORT ? Number(env.VITE_SERVER_PORT) : 3000,
  };
};
