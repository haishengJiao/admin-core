import { provide, ref } from 'vue';

import type { ScrollbarProvide } from '@/types';
import type { ScrollbarInstance } from 'element-plus';

import { SCROLLBAR_KEY } from '@/types';

export function useLayoutScroll(scrollbarRef: ScrollbarProvide['scrollbarRef']) {
  const x = ref(0);
  const y = ref(0);

  const scrollHandlers = new Set<ScrollbarInstance['onScroll']>();
  const endReachedHandlers = new Set<ScrollbarInstance['onEnd-reached']>();

  const handleScroll: ScrollbarInstance['onScroll'] = params => {
    x.value = params.scrollLeft;
    y.value = params.scrollTop;
    scrollHandlers.forEach(handler => handler?.(params));
  };

  const handleEndReached: ScrollbarInstance['onEnd-reached'] = direction => {
    endReachedHandlers.forEach(handler => handler?.(direction));
  };

  const onScroll = (handler: ScrollbarInstance['onScroll']) => {
    scrollHandlers.add(handler);
    return () => scrollHandlers.delete(handler);
  };

  const onEndReached = (handler: ScrollbarInstance['onEnd-reached']) => {
    endReachedHandlers.add(handler);
    return () => endReachedHandlers.delete(handler);
  };

  const lockScroll = () => {
    const wrapRef = scrollbarRef.value?.wrapRef;
    if (wrapRef) {
      wrapRef.style.overflow = 'hidden';
    }
  };

  const unlockScroll = () => {
    const wrapRef = scrollbarRef.value?.wrapRef;
    if (wrapRef) {
      wrapRef.style.overflow = 'auto';
    }
  };

  provide(SCROLLBAR_KEY, {
    scrollbarRef,
    onScroll,
    onEndReached,
  });

  return {
    x,
    y,
    handleScroll,
    handleEndReached,
    lockScroll,
    unlockScroll,
  };
}
