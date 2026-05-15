<template>
  <div class="h-full p-9 px-6">
    {{ $t('menu.examples') }}
    <br />
    theme-editor 高度 <br />

    <br />
    theme-editor 异步组件加载 loading
    <br />
    hideInMenu
    <br />
    hideChildrenInMenu
    <br />
    badge
    <br />
    badgeType
    <br />
    badgeVariants
    <br />
    order
    <br />
    fullPathKey
    <br />
    hideInTab
    <br />
    affixTab
    <br />
    affixTabOrder
    <br />
    hideInBreadcrumb
    <br />
    keepAlive
    <br />

    切换语言刷新当前路由、redirect第一个
    <br />
    <br />
    <Element />
  </div>
</template>

<script setup lang="ts">
import Element from '@/views/theme-editor/element/index.vue';
</script>
