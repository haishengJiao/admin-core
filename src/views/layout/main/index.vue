<template>
  <main class="bg-background-deep flex-1 overflow-hidden">
    <el-scrollbar height="100%" :view-style="viewStyle" wrap-class="main-scrollbar-wrap">
      <router-view />
    </el-scrollbar>
  </main>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const viewStyle: CSSProperties = {
  width: '100%',
  minHeight: '100%',
};
</script>
