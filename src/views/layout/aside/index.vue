<template>
  <aside
    class="bg-sidebar border-border text-text-body flex h-full flex-col border-r transition-all duration-300"
    :class="{ dark: darkSidebar && isLight }"
    style="width: 224px"
  >
    <MenuLogo />
    <div class="flex-1 overflow-hidden py-2">
      <el-scrollbar height="100%">
        <div class="px-2">
          <Menu />
        </div>
      </el-scrollbar>
    </div>
    <div style="width: 42px"></div>
  </aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import Menu from './menu/index.vue';
import MenuLogo from './menu-logo/index.vue';

import { usePreferencesStore } from '@/store';

const { appearance, isLight } = storeToRefs(usePreferencesStore());

const darkSidebar = computed(() => appearance.value.theme.darkSidebar);
</script>
