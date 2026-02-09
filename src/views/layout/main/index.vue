<template>
  <el-main class="overflow-hidden! p-0!">
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
