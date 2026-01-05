import type { UserConfig } from 'vite';

export default (env: Record<string, string>): UserConfig['server'] => {
  return {
    port: Number(env.VITE_SERVER_PORT),
  };
};
