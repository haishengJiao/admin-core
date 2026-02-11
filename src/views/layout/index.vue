<template>
  <div class="flex h-full w-full overflow-hidden">
    <LayoutAside />
    <div class="flex flex-1 flex-col overflow-hidden">
      <LayoutHeader />
      <LayoutMain />
      <LayoutFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutAside from './aside/index.vue';
import LayoutFooter from './footer/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutMain from './main/index.vue';
</script>
