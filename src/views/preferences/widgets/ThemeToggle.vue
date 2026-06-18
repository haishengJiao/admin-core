<template>
  <div
    class="text-text-body/80 hover:bg-fill hover:text-text-heading relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-150 ease-in-out hover:animate-[shrink_0.3s_ease-in-out]"
    @click="handleChangeTheme"
  >
    <CoreSvg
      class="absolute rotate-0 opacity-0 [transition:rotate_1.6s_cubic-bezier(0.5,1.5,0.75,1.25),opacity_0.6s_cubic-bezier(0.25,0,0.3,1)]"
      :class="{
        'opacity-100!': isDark,
        'rotate-90!': isDark,
      }"
      name="preferences-light-theme"
    />
    <CoreSvg
      class="absolute rotate-[72] opacity-0 [transition:rotate_1.6s_cubic-bezier(0.25,0,0.2,1),opacity_0.6s_cubic-bezier(0.25,0,0.3,1)]"
      :class="{
        'opacity-100!': !isDark,
        'rotate-0!': !isDark,
      }"
      name="preferences-dark-theme"
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';

import type { ThemeMode } from '@/store/preferences/types';
import type { ThemeToggleProps } from '@/views/preferences/types';

const { isDark = false } = defineProps<ThemeToggleProps>();
const modelValue = defineModel<ThemeMode>({ default: 'system' });

const handleChangeTheme = async (e: MouseEvent) => {
  const isAppearanceTransition =
    typeof document.startViewTransition === 'function' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isAppearanceTransition || !e) {
    handleSetTheme();
    return;
  }

  const x = e.clientX;
  const y = e.clientY;
  const horizontalDistance = Math.max(x, innerWidth - x);
  const verticalDistance = Math.max(y, innerHeight - y);
  const radius = Math.hypot(horizontalDistance, verticalDistance);

  const transition = document.startViewTransition(async () => {
    handleSetTheme();
    await nextTick();
  });

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`];
    const animate = document.documentElement.animate(
      {
        clipPath: isDark ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 450,
        easing: 'ease-in',
        pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
      },
    );
    animate.onfinish = () => {
      transition.skipTransition();
    };
  });
};

const handleSetTheme = () => {
  modelValue.value = isDark ? 'light' : 'dark';
};
</script>
