<template>
  <header
    class="flex h-12.5 items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(var(--header))] px-2"
  >
    <div>顶栏</div>
    <div class="flex items-center gap-1">
      <PreferencesSet />
      <ThemeSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeSwitcher from '@/views/preferences-set/components/theme-switcher/index.vue';
import PreferencesSet from '@/views/preferences-set/index.vue';
</script>
