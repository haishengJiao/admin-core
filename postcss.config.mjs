import pxtorem from 'postcss-pxtorem';

export default {
  plugins: [
    pxtorem({
      rootValue: 16, // 基准值
      unitPrecision: 5, // 转换后的精度
      propList: ['*'], // 所有属性都转换
      selectorBlackList: [], // 忽略的选择器
      replace: true,
      mediaQuery: false, // 不转换媒体查询中的 px
      minPixelValue: 1, // 小于 1px 不转换
      exclude: file => !(file.includes('node_modules') && file.includes('element-plus')), // 只转换 element-plus 的样式
    }),
  ],
};
