<template>
  <el-main class="main-container">
    <el-scrollbar height="100%" :view-style="viewStyle">
      <router-view />
    </el-scrollbar>
  </el-main>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const viewStyle: CSSProperties = {
  width: '100%',
  height: '100%',
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 0;
  overflow: hidden;
}
</style>
