<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <CoreSvg name="layout-404" size="360" />
      <div class="mb-10 text-center">
        <h1 class="mb-4 text-3xl font-semibold tracking-wide">哎呀！未找到页面</h1>
        <p class="text-base leading-relaxed text-[hsl(var(--muted-foreground))]">抱歉，我们无法找到您要找的页面。</p>
      </div>
      <el-button type="primary" @click="goHome">
        <template #icon><i-ep-back /></template>
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>
