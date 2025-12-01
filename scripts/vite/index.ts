import { defineConfig } from 'vite';

import plugins from './plugins';
import resolve from './resolve';

export default defineConfig({
  plugins,
  resolve,
});
