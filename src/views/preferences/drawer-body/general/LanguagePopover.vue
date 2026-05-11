<template>
  <el-popover
    ref="popoverRef"
    :offset="4"
    popper-class="p-1! rounded-lg! w-auto! min-w-30! border! border-solid! border-border!"
    :show-arrow="false"
    trigger="click"
  >
    <template #reference>
      <div
        class="text-text-body/80 hover:bg-fill hover:text-text-heading flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-150 ease-in-out hover:animate-[shrink_0.3s_ease-in-out]"
      >
        <CoreSvg name="preferences-locales-switcher" />
      </div>
    </template>

    <ul>
      <li
        v-for="item in SUPPORT_LANGUAGES"
        :key="item.value"
        class="text-text-body/80 hover:bg-fill mb-1 flex cursor-pointer items-center rounded-lg px-2 py-1.5 text-sm leading-5 transition-colors last:mb-0"
        :class="modelValue === item.value && 'bg-fill'"
        @click="changeLanguage(item.value)"
      >
        <span
          class="mr-2 h-1.5 w-1.5 rounded-full transition-colors"
          :class="modelValue === item.value && 'bg-text-body'"
        ></span>
        {{ item.label }}
      </li>
    </ul>
  </el-popover>
</template>

<script lang="ts" setup>
import { useTemplateRef } from 'vue';

import type { Locale } from '@/locales';

import { SUPPORT_LANGUAGES } from '@/constants';

const modelValue = defineModel<string>();

const popover = useTemplateRef('popoverRef');

const changeLanguage = (value: Locale) => {
  popover.value?.hide();
  if (modelValue.value === value) {
    return;
  }
  modelValue.value = value;
};
</script>
