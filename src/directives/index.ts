import { disabledClipboard } from './disabled-clipboard';

import type { App } from 'vue';

const directives = {
  disabledClipboard,
};

export default {
  install(app: App) {
    Object.entries(directives).forEach(([name, directive]) => {
      app.directive(name, directive);
    });
  },
};
