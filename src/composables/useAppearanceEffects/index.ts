import { useStyleTag } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { computed, watchEffect } from 'vue';

import { usePreferencesStore } from '@/store';
import { THEME_KEY } from '@/utils';

export function useAppearanceEffects() {
  const preferences = usePreferencesStore();
  const { isDark, appearance } = storeToRefs(preferences);

  const { css } = useStyleTag('', { id: 'app-global-styles' });

  watchEffect(() => {
    const isDarkVal = isDark.value;
    document.documentElement.classList.toggle('dark', isDarkVal);
    localStorage.setItem(THEME_KEY, isDarkVal ? 'dark' : 'light');
  });

  const styleContent = computed(() => {
    const { radius, fontSize, primaryColor, secondaryColor } = appearance.value;
    return `
      :root:root, :root:root .dark {
        --radius: ${radius}rem;
        --font-size-base: ${fontSize}px;
        --primary: ${primaryColor.color};
        --success: ${secondaryColor.success};
        --warning: ${secondaryColor.warning};
        --danger: ${secondaryColor.danger};
        --error: ${secondaryColor.error};
        --info: ${secondaryColor.info};
      }
    `;
  });
  watchEffect(() => {
    css.value = styleContent.value;
  });

  watchEffect(() => {
    const { other } = appearance.value;
    const { grayMode, weakMode } = other;

    const html = document.documentElement;
    html.classList.toggle('gray-mode', grayMode);
    html.classList.toggle('weak-mode', weakMode);
  });

  watchEffect(onInvalidate => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    appearance.value.theme.systemPrefersDark = mediaQuery.matches;
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      appearance.value.theme.systemPrefersDark = e.matches;
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    onInvalidate(() => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    });
  });
}
