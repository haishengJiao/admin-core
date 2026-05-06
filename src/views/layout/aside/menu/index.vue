<template>
  <el-menu ref="menuRef" :default-active="defaultActive" :unique-opened="accordion" @select="handleSelect">
    <template v-for="item in routes" :key="item.path">
      <SubMenu :active-path="activePath" :menu="item" />
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed, ref, useTemplateRef, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import SubMenu from './SubMenu.vue';

import type { MenuInstance, MenuItemRegistered } from 'element-plus';
import type { RouteRecordRaw } from 'vue-router';

import { usePreferencesStore } from '@/store';

const route = useRoute();
const router = useRouter();
const { layout } = storeToRefs(usePreferencesStore());

const accordion = computed(() => layout.value.navigation.accordion);

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
const allRoutes = ref(router.getRoutes());
const defaultActive = ref(route.path);
const active = ref(route.path);
const activePath = ref<MenuItemRegistered['indexPath']>(findActivePath(route.path, routes));
const menuRef = useTemplateRef<MenuInstance>('menuRef');

const handleSelect: MenuInstance['onSelect'] = index => {
  if (active.value === index) return;
  const targetRoute = allRoutes.value.find(item => item.path === index);
  if (!targetRoute) return;
  const { link } = targetRoute.meta;
  if (link) {
    menuRef.value?.updateActiveIndex(active.value);
    window.open(link, '_blank');
  } else {
    router.push(index);
  }
};

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
