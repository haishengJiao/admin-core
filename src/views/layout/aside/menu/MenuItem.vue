<template>
  <el-menu-item :index="menu.path">
    <MenuIcon class="menu-icon" :icon="icon" />
    <span class="truncate leading-6">{{ menu.meta?.title }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import MenuIcon from './MenuIcon.vue';

import type { RouteMeta, RouteRecordRaw } from 'vue-router';

type Props = {
  menu: RouteRecordRaw;
  icon: RouteMeta['icon'];
};

defineProps<Props>();
</script>
