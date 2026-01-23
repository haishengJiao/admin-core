<template>
  <div class="layout-container display-flex">
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

<style scoped>
.layout-container {
  width: 100%;
  height: 100%;
}
</style>
