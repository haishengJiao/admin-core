import { useStyleTag } from '@vueuse/core';
import { watch } from 'vue';

import { usePreferencesStore } from '@/store';
import { mixColor } from '@/utils';

const injectStyleVariables = (variables: Record<string, string>, id: string) => {
  let cssText = ':root:root{';
  for (const [key, value] of Object.entries(variables)) {
    cssText += `${key}:${value};`;
  }
  cssText += '}';
  useStyleTag(cssText, { id });
};

export const useElementPlusDesign = () => {
  const preferences = usePreferencesStore();

  const generateColorVariants = (colorName: string, colorValue: string, isLight: boolean) => {
    const lightBase = isLight ? '#ffffff' : '#141414';
    const darkBase = isLight ? '#000000' : '#ffffff';
    const variants: Record<string, string> = {};

    variants[`--el-color-${colorName}`] = colorValue;
    [3, 5, 7, 8, 9].forEach(weight => {
      variants[`--el-color-${colorName}-light-${weight}`] = mixColor(lightBase, colorValue, weight / 10);
    });
    variants[`--el-color-${colorName}-dark-2`] = mixColor(darkBase, colorValue, 0.2);

    return variants;
  };

  const generateFontSizes = (baseSize: number) => {
    const sizes = [-4, -3, -2, 0, 2, 4];
    const names = ['extra-small', 'small', 'base', 'medium', 'large', 'extra-large'];

    return names.reduce(
      (acc, name, idx) => {
        const offset = sizes[idx];
        acc[`--el-font-size-${name}`] = offset === 0 ? `${baseSize}px` : `calc(${baseSize}px + ${offset}px)`;
        return acc;
      },
      {} as Record<string, string>,
    );
  };

  const varMapping = {
    '--el-bg-color': '--bg',
    '--el-bg-color-page': '--bg-page',
    '--el-bg-color-overlay': '--bg-overlay',
    '--el-text-color-primary': '--text-body',
    '--el-text-color-regular': '--text-regular',
    '--el-text-color-secondary': '--text-secondary',
    '--el-text-color-placeholder': '--text-placeholder',
    '--el-text-color-disabled': '--text-disabled',
    '--el-border-color': '--border',
    '--el-border-color-light': '--border-light',
    '--el-border-color-lighter': '--border-lighter',
    '--el-border-color-extra-light': '--border-extra-light',
    '--el-border-color-dark': '--border-dark',
    '--el-border-color-darker': '--border-darker',
    '--el-overlay-color': '--overlay',
    '--el-overlay-color-light': '--overlay-light',
    '--el-overlay-color-lighter': '--overlay-lighter',
    '--el-mask-color': '--mask',
    '--el-mask-color-extra-light': '--mask-extra-light',
    '--el-font-family': '--font-family',
  };

  watch(
    () => preferences.appearance,
    () => {
      const { isLight, appearance } = preferences;
      const { primaryColor, secondaryColor, radius, fontSize } = appearance;
      const { success, warning, danger, error, info } = secondaryColor;

      const rootStyles = getComputedStyle(document.documentElement);
      const getCssVar = (varName: string) => rootStyles.getPropertyValue(varName);

      const mappedVariables = Object.entries(varMapping).reduce(
        (acc, [elVar, customVar]) => {
          acc[elVar] = getCssVar(customVar);
          return acc;
        },
        {} as Record<string, string>,
      );

      const variables: Record<string, string> = {
        ...generateColorVariants('primary', primaryColor.color, isLight),
        ...generateColorVariants('success', success, isLight),
        ...generateColorVariants('warning', warning, isLight),
        ...generateColorVariants('danger', danger, isLight),
        ...generateColorVariants('error', error, isLight),
        ...generateColorVariants('info', info, isLight),
        ...generateFontSizes(fontSize),
        ...mappedVariables,
        '--el-border-radius-base': `${radius}rem`,
      };

      injectStyleVariables(variables, 'element-plus-theme-variables');
    },
    { immediate: true, deep: true },
  );
};
