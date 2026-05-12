<template>
  <el-menu
    ref="menuRef"
    class="custom-menu"
    :default-active="defaultActive"
    :unique-opened="accordion"
    @select="handleSelect"
  >
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

import { $t } from '@/locales';
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

function translateRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  return routes.map(route => {
    const newRoute = { ...route };
    const { meta, children } = newRoute;
    if (meta?.title) {
      const title = meta.title ? $t(meta.title) : '';
      newRoute.meta = { ...meta, title };
    }
    if (children?.length) {
      newRoute.children = translateRoutes(children);
    }
    return newRoute;
  });
}

const generateMenus = computed(() => {
  const menus = router.getRoutes().find(item => item.path === '/')?.children ?? [];
  return translateRoutes(menus);
});

const routes = generateMenus;
const allRoutes = ref(router.getRoutes());
const defaultActive = ref(route.path);
const active = ref(route.path);
const activePath = ref<MenuItemRegistered['indexPath']>(findActivePath(route.path, routes.value));
const menuRef = useTemplateRef<MenuInstance>('menuRef');

const handleSelect: MenuInstance['onSelect'] = index => {
  if (active.value === index) return;
  const targetRoute = allRoutes.value.find(item => item.path === index);
  if (!targetRoute) return;
  const { link, openInNewWindow } = targetRoute.meta;
  if (link) {
    menuRef.value?.updateActiveIndex(active.value);
    window.open(link, '_blank');
  } else if (openInNewWindow) {
    menuRef.value?.updateActiveIndex(active.value);
    window.open(index, '_blank');
  } else {
    router.push(index);
  }
};

watch(
  () => route,
  newVal => {
    menuRef.value?.updateActiveIndex(newVal.path);
    active.value = newVal.path;
    activePath.value = findActivePath(route.path, routes.value);
  },
  {
    deep: true,
  },
);
</script>

<style>
@reference "tailwindcss";
@reference "@/style/tailwind/theme/index.css";

.custom-menu {
  --el-menu-text-color: var(--text-heading);
  --el-menu-item-height: 42px;
  --el-menu-sub-item-height: 42px;
  --el-menu-base-level-padding: 12px;
  --el-menu-bg-color: var(--bg);

  @apply border-r-0! transition-colors! duration-300!;

  .el-menu-item,
  .el-sub-menu__title {
    @apply rounded-lg transition-colors! duration-300! hover:bg-(--el-color-primary-light-9);

    .menu-icon {
      @apply mr-2 flex h-4 w-4 shrink-0 items-center text-base transition-transform duration-250;
    }

    &:hover {
      @apply text-primary;

      .menu-icon {
        @apply scale-120;
      }
    }
  }

  .el-menu-item {
    &.is-active {
      @apply bg-(--el-color-primary-light-8);
    }
  }

  .el-sub-menu {
    &.is-active {
      & > .el-sub-menu__title {
        @apply text-primary;
      }
    }
  }

  .el-sub-menu,
  .el-menu-item,
  .el-sub-menu__title {
    @apply mb-0.5;
  }
}
</style>
