import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 标题名称
     */
    title: string;
  }
}
