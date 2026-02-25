import {
  ignores,
  javascript,
  typescript,
  vue,
  prettier,
  imports,
  comments,
  jsdoc,
  jsonc,
  regexp,
  unicorn,
  disabled,
} from './modules/index.mjs';

export default [
  ignores,
  javascript,
  typescript,
  ...vue,
  prettier,
  imports,
  comments,
  jsdoc,
  ...jsonc,
  regexp,
  unicorn,
  ...disabled,
];
