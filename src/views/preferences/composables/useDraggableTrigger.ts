import { useDraggable } from '@vueuse/core';
import { debounce } from 'lodash-es';
import { storeToRefs } from 'pinia';
import { nextTick, onMounted, ref, toValue, watch, onUnmounted } from 'vue';

import type { UseDraggableOptions } from '@vueuse/core';

import { usePreferencesStore } from '@/store';

type DraggableTarget = Parameters<typeof useDraggable>[0];

function getRootVarPx(varName: string): number {
  const temp = document.createElement('div');
  temp.style.cssText = `
    position: absolute;
    visibility: hidden;
    height: var(${varName});
    pointer-events: none;
  `;
  document.body.appendChild(temp);
  const pxStr = getComputedStyle(temp).height;
  document.body.removeChild(temp);
  return parseFloat(pxStr) || 0;
}

export function useDraggableTrigger(target: DraggableTarget, option?: UseDraggableOptions) {
  const isDragging = ref(false);
  const min = ref(0);
  const max = ref(window.innerHeight);
  const { appearance, layout, isFullContent } = storeToRefs(usePreferencesStore());

  const calcBoundary = async () => {
    await nextTick();
    const el = toValue(target);
    const elHeight = el?.getBoundingClientRect().height || 40;
    const headerHeight = getRootVarPx('--header-height');
    const tabBarHeight = getRootVarPx('--tabbar-height');
    const footerHeight = getRootVarPx('--footer-height');

    let topOffset = 0;
    let bottomOffset = 0;

    if (layout.value.footer.enable) {
      bottomOffset = footerHeight;
    }

    if (layout.value.header.enable) {
      topOffset += headerHeight;
    }

    if (layout.value.tabbar.enable) {
      topOffset += tabBarHeight;
    }

    if (isFullContent.value) {
      topOffset = 0;
      bottomOffset = 0;
    }

    min.value = topOffset;
    max.value = window.innerHeight - bottomOffset - elHeight;

    if (max.value < min.value) max.value = min.value;
    y.value = Math.max(min.value, Math.min(max.value, y.value));
  };

  watch(
    [
      () => appearance.value.fontSize,
      () => layout.value.layout,
      () => layout.value.footer.enable,
      () => layout.value.header.enable,
      () => layout.value.tabbar.enable,
    ],
    () => calcBoundary(),
    { flush: 'post' },
  );

  const handleResize = debounce(() => calcBoundary(), 200);

  onMounted(() => {
    calcBoundary();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    handleResize.cancel();
    window.removeEventListener('resize', handleResize);
  });

  const { y } = useDraggable(target, {
    axis: 'y',
    preventDefault: false,
    stopPropagation: false,
    initialValue: { x: 0, y: window.innerHeight * 0.5 },
    ...option,

    onStart() {
      isDragging.value = false;
    },
    onEnd() {
      setTimeout(() => {
        isDragging.value = false;
      }, 0);
    },

    onMove(option) {
      isDragging.value = true;
      y.value = Math.max(min.value, Math.min(max.value, option.y));
    },
  });

  return { y, isDragging };
}
