<template>
  <el-menu ref="menuRef" :default-active="defaultActive" @select="handleSelect">
    <template v-for="item in routes" :key="item.path">
      <SubMenu :active-path="activePath" :menu="item" />
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

const findActivePath = (path: string, menuList: RouteRecordRaw[] = []): string[] => {
  for (const item of menuList) {
    if (item.path === path) {
      return [item.path];
    }
    if (item.children?.length) {
      const childPath = findActivePath(path, item.children);
      if (childPath.length) {
        return [item.path, ...childPath];
      }
    }
  }
  return [];
};

const routes = router.options.routes.find(item => item.path === '/')?.children;
const defaultActive = ref(route.path);
const active = ref(route.path);
const activePath = ref<MenuItemRegistered['indexPath']>(findActivePath(route.path, routes));

const handleSelect: MenuInstance['onSelect'] = (index, indexPath) => {
  if (active.value === index) {
    return;
  }
  active.value = index;
  activePath.value = indexPath;
  router.push(index);
};

const menuRef = useTemplateRef<MenuInstance>('menuRef');

watch(
  () => route,
  newVal => {
    menuRef.value?.updateActiveIndex(newVal.path);
    active.value = newVal.path;
    activePath.value = findActivePath(route.path, routes);
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
