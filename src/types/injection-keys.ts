import type { ScrollbarInstance } from 'element-plus';
import type { InjectionKey, Ref } from 'vue';

export interface ScrollbarProvide {
  scrollbarRef: Ref<ScrollbarInstance | null>;
  onScroll: (handler: ScrollbarInstance['onScroll']) => void;
  onEndReached: (handler: ScrollbarInstance['onEnd-reached']) => void;
}

export const SCROLLBAR_KEY: InjectionKey<ScrollbarProvide> = Symbol('el-scrollbar');
