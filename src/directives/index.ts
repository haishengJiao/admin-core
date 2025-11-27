import * as directives from './modules';

import type { App } from 'vue';

export default {
  install(app: App) {
    Object.entries(directives).forEach(([name, directive]) => {
      app.directive(name, directive);
    });
  },
};
