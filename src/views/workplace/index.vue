<template>
  <div class="h-full p-9 px-6">
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
    <br />
    <br />
    <br />
    <el-button @click="scroll?.scrollbarRef.value?.setScrollTop(500)">滚动</el-button>
    <Element />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

import { SCROLLBAR_KEY } from '@/types';
import Element from '@/views/theme-editor/element/index.vue';

const scroll = inject(SCROLLBAR_KEY);

console.log(scroll);

scroll?.onEndReached(val => {
  console.log(val);
});

scroll?.onScroll(val => {
  console.log(val);
});
</script>
