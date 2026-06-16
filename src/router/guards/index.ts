import afterEach from './afterEach';
import beforeEach from './beforeEach';

import type { Router } from 'vue-router';

export default (router: Router) => {
  const loadedPaths = new Set<string>();

  beforeEach(router, loadedPaths);
  afterEach(router, loadedPaths);
};
