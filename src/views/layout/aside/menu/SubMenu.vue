<template>
  <el-sub-menu v-if="menu.children?.length" :index="menu.path">
    <template #title>
      <span>{{ menu.meta?.title }}</span>
    </template>
    <template v-for="sub in menu.children" :key="sub.path">
      <SubMenu :menu="sub" @menu-item-click="onMenuItemClick" />
    </template>
  </el-sub-menu>
  <MenuItem v-else :menu="menu" @menu-item-click="onMenuItemClick" />
</template>

<script lang="ts" setup>
import MenuItem from './MenuItem.vue';

import type { MenuItemRegistered } from 'element-plus';
import type { RouteRecordRaw } from 'vue-router';

type Props = {
  menu: RouteRecordRaw;
};
type Emits = {
  menuItemClick: [MenuItemRegistered, RouteRecordRaw];
};

defineOptions({ name: 'SubMenu' });
defineProps<Props>();
const emits = defineEmits<Emits>();

const onMenuItemClick = (menu: MenuItemRegistered, raw: RouteRecordRaw) => {
  emits('menuItemClick', menu, raw);
};
</script>
