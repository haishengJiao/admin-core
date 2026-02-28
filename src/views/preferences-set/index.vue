<template>
  <div
    class="text-foreground/80 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-150 ease-in-out hover:animate-[shrink_0.3s_ease-in-out]"
    @click="handleOpenDrawer"
  >
    <CoreSvg name="preferences-set-set" />
  </div>

  <el-drawer v-model="drawerVisible" append-to-body class="preferences-set-drawer" :show-close="false" size="384px">
    偏好设置
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawerVisible = ref(false);

const handleOpenDrawer = () => {
  drawerVisible.value = true;
};
</script>

<style>
@reference "tailwindcss";

.preferences-set-drawer .el-drawer__header {
  @apply mb-0 p-0;
}

.preferences-set-drawer .el-drawer__body {
  @apply p-0;
}
</style>
