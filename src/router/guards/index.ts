import afterEach from './afterEach';
import beforeEach from './beforeEach';

import type { Router } from 'vue-router';

export default (router: Router) => {
  beforeEach(router);
  afterEach(router);
};
