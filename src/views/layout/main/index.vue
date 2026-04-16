<template>
  <main class="bg-bg-page flex-1 overflow-hidden transition-all duration-300">
    <el-scrollbar
      ref="mainScrollbar"
      height="100%"
      :view-style="viewStyle"
      wrap-class="main-scrollbar-wrap"
      @end-reached="handleEndReached"
      @scroll="handleScroll"
    >
      <router-view />
    </el-scrollbar>
  </main>
</template>

<script setup lang="ts">
import { provide, useTemplateRef, watchEffect } from 'vue';

import type { ScrollbarInstance } from 'element-plus';
import type { CSSProperties } from 'vue';

import { SCROLLBAR_KEY } from '@/types/injection-keys';

const viewStyle: CSSProperties = {
  width: '100%',
  minHeight: '100%',
};

const mainScrollbar = useTemplateRef('mainScrollbar');
const scrollHandlers = new Set<ScrollbarInstance['onScroll']>();
const endReachedHandlers = new Set<ScrollbarInstance['onEnd-reached']>();

const handleScroll: ScrollbarInstance['onScroll'] = params => {
  scrollHandlers.forEach(handler => handler && handler(params));
};

const handleEndReached: ScrollbarInstance['onEnd-reached'] = direction => {
  endReachedHandlers.forEach(handler => handler && handler(direction));
};

const onScroll = (handler: ScrollbarInstance['onScroll']) => {
  watchEffect(onInvalidate => {
    scrollHandlers.add(handler);
    onInvalidate(() => {
      scrollHandlers.delete(handler);
    });
  });
};

const onEndReached = (handler: ScrollbarInstance['onEnd-reached']) => {
  watchEffect(onInvalidate => {
    endReachedHandlers.add(handler);
    onInvalidate(() => {
      endReachedHandlers.delete(handler);
    });
  });
};

provide(SCROLLBAR_KEY, {
  scrollbarRef: mainScrollbar,
  onScroll,
  onEndReached,
});
</script>
