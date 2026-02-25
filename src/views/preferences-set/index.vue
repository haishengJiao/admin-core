<template>
  <div
    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#636366] transition-all duration-150 ease-in-out hover:bg-[#f4f4f5] hover:text-[#3a3a3c]"
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
