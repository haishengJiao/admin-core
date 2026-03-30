<template>
  <div
    class="text-foreground/80 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-150 ease-in-out hover:animate-[shrink_0.3s_ease-in-out]"
    @click="handleOpenDrawer"
  >
    <CoreSvg name="preferences-set" />
  </div>

  <el-drawer v-model="drawerVisible" append-to-body class="preferences-drawer w-130! max-w-sm" :show-close="false">
    <template #header>
      <DrawerHeader @close="drawerVisible = false" />
    </template>
    <DrawerBody />
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import DrawerBody from './components/drawer-body/index.vue';
import DrawerHeader from './components/drawer-header/index.vue';

const drawerVisible = ref(false);

const handleOpenDrawer = () => {
  drawerVisible.value = true;
};
</script>

<style>
@reference "tailwindcss";
@reference "@/style/modules/tailwindcss/theme/index.css";

.preferences-drawer .el-drawer__header {
  @apply mb-0 p-0;
}

.preferences-drawer .el-drawer__body {
  @apply p-0;
}

.preferences-drawer .outline {
  @apply outline-border relative flex w-full items-center justify-center rounded-md p-1 outline-1;
}

.preferences-drawer .outline::after {
  @apply outline-primary pointer-events-none absolute h-0 w-0 rounded-[inherit] opacity-0 outline-2 transition-all duration-300 ease-in-out;

  content: ' ';
}

.preferences-drawer .outline.is-active {
  @apply outline-primary outline-2;
}

.preferences-drawer .outline:hover:not(.is-active)::after {
  @apply h-full w-full opacity-100;
}
</style>
