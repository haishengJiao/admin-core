<template>
  <div class="flex h-full w-full">
    <el-container>
      <LayoutAside />
      <el-container direction="vertical">
        <LayoutHeader />
        <LayoutMain />
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LayoutAside from './aside/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutMain from './main/index.vue';
</script>
