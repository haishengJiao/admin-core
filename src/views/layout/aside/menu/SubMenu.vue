<template>
  <el-sub-menu v-if="menu.children?.length" :index="menu.path">
    <template #title>
      <MenuIcon class="menu-icon" :icon="icon" />
      <span class="truncate">{{ menu.meta?.title }}</span>
    </template>
    <template v-for="sub in menu.children" :key="sub.path">
      <SubMenu :active-path="activePath" :menu="sub" />
    </template>
  </el-sub-menu>
  <MenuItem v-else :icon="icon" :menu="menu" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import MenuIcon from './MenuIcon.vue';
import MenuItem from './MenuItem.vue';

import type { RouteRecordRaw } from 'vue-router';

type Props = {
  menu: RouteRecordRaw;
  activePath: string[];
};

defineOptions({ name: 'SubMenu' });
const props = defineProps<Props>();

const isActive = computed(() => {
  return props.activePath?.some(path => path === props.menu.path) || false;
});

const icon = computed(() => {
  const meta = props.menu.meta;
  return isActive.value ? (meta?.activeIcon ?? meta?.icon) : meta?.icon;
});
</script>
