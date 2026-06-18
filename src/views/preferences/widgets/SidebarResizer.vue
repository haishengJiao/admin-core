<template>
  <div
    ref="dragBarRef"
    class="hover:bg-primary absolute inset-y-0 -right-px z-1000 w-0.5 cursor-col-resize"
    @mousedown="handleDragSidebar"
  ></div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue';

import { SIDEBAR_MIN_WIDTH, SIDEBAR_MAX_WIDTH } from '@/constants';

const modelValue = defineModel<number>({ required: true });

const dragBar = useTemplateRef('dragBarRef');

const handleDragSidebar = (e: MouseEvent) => {
  if (!dragBar.value) return;
  e.preventDefault();
  e.stopPropagation();

  const startX = e.clientX;
  const startWidth = modelValue.value;
  const startLeft = dragBar.value.offsetLeft;

  dragBar.value.classList.add('bg-primary');
  dragBar.value.classList.remove('bg-primary/30');

  const dragOverlay = document.createElement('div');
  dragOverlay.style.position = 'fixed';
  dragOverlay.style.inset = '0';
  dragOverlay.style.zIndex = '9999';
  dragOverlay.style.cursor = 'col-resize';
  dragOverlay.style.userSelect = 'none';
  dragOverlay.style.outline = 'none';
  dragOverlay.tabIndex = -1;
  dragOverlay.style.background = 'rgba(0,0,0,0)';
  document.body.append(dragOverlay);

  const handleResize = (moveEvent: MouseEvent) => {
    if (!dragBar.value) return;

    const deltaX = moveEvent.clientX - startX;
    let currentWidth = startWidth + deltaX;

    const isOutOfMin = currentWidth < SIDEBAR_MIN_WIDTH;
    const isOutOfMax = currentWidth > SIDEBAR_MAX_WIDTH;
    const isOutOfBounds = isOutOfMin || isOutOfMax;

    dragOverlay.style.cursor = isOutOfBounds ? 'not-allowed' : 'col-resize';

    if (isOutOfMin) currentWidth = SIDEBAR_MIN_WIDTH;
    if (isOutOfMax) currentWidth = SIDEBAR_MAX_WIDTH;

    const newLeft = startLeft + (currentWidth - startWidth);

    dragBar.value.style.left = `${newLeft}px`;

    if (isOutOfBounds) {
      dragBar.value.classList.add('bg-primary/30');
      dragBar.value.classList.remove('bg-primary');
    } else {
      dragBar.value.classList.add('bg-primary');
      dragBar.value.classList.remove('bg-primary/30');
    }
  };

  const stopResize = (upEvent: MouseEvent) => {
    if (!dragBar.value) return;

    const deltaX = upEvent.clientX - startX;
    let newWidth = startWidth + deltaX;

    newWidth = Math.min(SIDEBAR_MAX_WIDTH, Math.max(SIDEBAR_MIN_WIDTH, newWidth));
    modelValue.value = newWidth;

    dragBar.value.style.left = '';
    dragBar.value.classList.remove('bg-primary', 'bg-primary/30');

    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', stopResize);

    dragOverlay.remove();
  };

  document.addEventListener('mousemove', handleResize);
  document.addEventListener('mouseup', stopResize);
};
</script>
