import type { Component } from 'vue';
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 标题名称
     */
    title?: string;
    /**
     * 图标
     * 支持以下类型：
     * - 组件：Vue 组件对象
     * - 网络图片：以 http:// 或 https:// 开头的图片 URL
     * - SVG 图标：以 #svg- 开头的字符串，如 '#svg-layout-example'（配合 CoreSvg 组件使用）
     * - 字体图标：以 icon- 开头的 CSS 类名，如 'icon-workbench'（使用 <i> 标签渲染）
     */
    icon?: Component | string;
    /**
     * 激活图标
     * 支持以下类型：
     * - 组件：Vue 组件对象
     * - 网络图片：以 http:// 或 https:// 开头的图片 URL
     * - SVG 图标：以 #svg- 开头的字符串，如 '#svg-layout-example'（配合 CoreSvg 组件使用）
     * - 字体图标：以 icon- 开头的 CSS 类名，如 'icon-workbench'（使用 <i> 标签渲染）
     */
    activeIcon?: Component | string;
    /**
     * 内嵌页面的 iframe 地址
     */
    iframeSrc?: string;
  }
}
