<template>
  <header class="flex h-12.5 items-center justify-between border-b border-[#e4e4e7] px-2">
    <div>顶栏</div>
    <div>
      <PreferencesSet />
    </div>
  </header>
</template>

<script setup lang="ts">
import PreferencesSet from '@/views/preferences-set/index.vue';
</script>
