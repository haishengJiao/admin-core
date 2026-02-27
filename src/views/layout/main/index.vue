<template>
  <main class="flex-1 overflow-hidden bg-[hsl(var(--background-deep))]">
    <el-scrollbar height="100%" :view-style="viewStyle">
      <router-view />
    </el-scrollbar>
  </main>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const viewStyle: CSSProperties = {
  width: '100%',
  'min-height': '100%',
};
</script>
