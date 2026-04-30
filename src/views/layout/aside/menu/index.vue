<template>
  <el-menu ref="menuRef" :default-active="defaultActive">
    <template v-for="item in routes" :key="item.path">
      <SubMenu :menu="item" @menu-item-click="onMenuItemClick" />
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import SubMenu from './SubMenu.vue';

import type { MenuInstance, MenuItemRegistered } from 'element-plus';
import type { RouteRecordRaw } from 'vue-router';

const route = useRoute();
const router = useRouter();

const routes = router.options.routes.find(item => item.path === '/')?.children;
const defaultActive = ref(route.path);
const activePath = ref(route.path);

const onMenuItemClick = (menu: MenuItemRegistered, _raw: RouteRecordRaw) => {
  if (activePath.value === menu.index) {
    return;
  }
  activePath.value = menu.index;
  router.push(menu.index);
};

const menuRef = useTemplateRef<MenuInstance>('menuRef');

watch(
  () => route,
  newVal => {
    menuRef.value?.updateActiveIndex(newVal.path);
  },
  {
    deep: true,
  },
);
</script>

<style scoped>
@reference "tailwindcss";
@reference "@/style/tailwind/theme/index.css";

.el-menu {
  --el-menu-text-color: var(--text-heading);
  --el-menu-item-height: 42px;
  --el-menu-sub-item-height: 42px;
  --el-menu-base-level-padding: 12px;
  --el-menu-bg-color: var(--bg);

  @apply border-r-0! transition-colors! duration-300!;
}

.el-menu :deep(.el-menu-item),
.el-menu :deep(.el-sub-menu__title) {
  @apply rounded-lg transition-colors! duration-300! hover:bg-(--el-color-primary-light-9);
}

.el-menu :deep(.el-menu-item.is-active) {
  @apply bg-(--el-color-primary-light-8);
}

.el-menu :deep(.el-sub-menu.is-active) > .el-sub-menu__title {
  @apply text-primary;
}

.el-menu :deep(.el-sub-menu),
.el-menu :deep(.el-menu-item),
.el-menu :deep(.el-sub-menu__title) {
  @apply mb-0.5;
}

.el-menu :deep(.el-menu-item) .menu-icon,
.el-menu :deep(.el-sub-menu__title) .menu-icon {
  @apply mr-2 flex h-4 w-4 shrink-0 items-center text-base transition-transform duration-250;
}

.el-menu :deep(.el-menu-item):hover,
.el-menu :deep(.el-sub-menu__title):hover {
  @apply text-primary;
}

.el-menu :deep(.el-menu-item):hover .menu-icon,
.el-menu :deep(.el-sub-menu__title):hover .menu-icon {
  @apply scale-120;
}
</style>
