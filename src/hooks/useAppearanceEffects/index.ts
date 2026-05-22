import { useCssVar } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';

import { usePreferencesStore } from '@/store';
import { THEME_KEY } from '@/utils';

export function useAppearanceEffects() {
  const preferences = usePreferencesStore();
  const { isDark, appearance } = storeToRefs(preferences);

  const radiusVar = useCssVar('--radius');
  const fontSizeVar = useCssVar('--font-size-base');
  const primaryVar = useCssVar('--primary');
  const successVar = useCssVar('--success');
  const warningVar = useCssVar('--warning');
  const dangerVar = useCssVar('--danger');
  const errorVar = useCssVar('--error');
  const infoVar = useCssVar('--info');

  watchEffect(() => {
    const isDarkVal = isDark.value;
    document.documentElement.classList.toggle('dark', isDarkVal);
    localStorage.setItem(THEME_KEY, isDarkVal ? 'dark' : 'light');
  });

  watchEffect(() => {
    const { radius, fontSize, primaryColor, secondaryColor } = appearance.value;
    const { success, warning, danger, error, info } = secondaryColor;

    radiusVar.value = `${radius}rem`;
    fontSizeVar.value = `${fontSize}px`;
    primaryVar.value = primaryColor.color;
    successVar.value = success;
    warningVar.value = warning;
    dangerVar.value = danger;
    errorVar.value = error;
    infoVar.value = info;
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
