import pluginComments from 'eslint-plugin-eslint-comments';

/** @type {import('eslint').Linter.Config} */
export const comments = {
  plugins: {
    'eslint-comments': pluginComments,
  },
  rules: {
    'eslint-comments/no-aggregating-enable': 'error', // 禁止在一个eslint-enable注释中启用多个规则，要求每个规则单独启用以保持清晰性
    'eslint-comments/no-duplicate-disable': 'error', // 禁止重复的eslint-disable注释，避免冗余的规则禁用声明
    'eslint-comments/no-unlimited-disable': 'error', // 禁止使用eslint-disable注释禁用所有规则，要求明确指定要禁用的具体规则
    'eslint-comments/no-unused-enable': 'error', // 禁止未使用的eslint-enable注释，确保每个启用注释都有对应的作用
  },
};
