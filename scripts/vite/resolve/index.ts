import { fileURLToPath, URL } from 'node:url';

import type { UserConfig } from 'vite';

export default {
  alias: {
    '@': fileURLToPath(new URL('../../../src', import.meta.url)),
  },
} satisfies UserConfig['resolve'];
