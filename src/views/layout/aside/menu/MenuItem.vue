<template>
  <el-menu-item :index="menu.path" @click="handleClick">
    <MenuIcon class="menu-icon" :icon="menu.meta?.icon" />
    <span class="truncate">{{ menu.meta?.title }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import MenuIcon from './MenuIcon.vue';

import type { MenuItemRegistered } from 'element-plus';
import type { RouteRecordRaw } from 'vue-router';

type Props = {
  menu: RouteRecordRaw;
};

type Emits = {
  menuItemClick: [MenuItemRegistered, RouteRecordRaw];
};

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const handleClick = (menu: MenuItemRegistered) => {
  emits('menuItemClick', menu, props.menu);
};
</script>
