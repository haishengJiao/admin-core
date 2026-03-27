<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Image 图片</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <div class="w-full">
        <div
          v-for="fit in fits"
          :key="fit"
          class="box-border inline-block w-1/5 border-r border-solid border-(--el-border-color) py-7.5 text-center align-top last:border-r-0"
        >
          <span class="mb-5 block text-sm text-(--el-text-color-secondary)">{{ fit }}</span>
          <el-image class="h-25 w-25" :fit="fit" :src="url" />
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import type { ImageFitType } from 'element-plus';

const fits: ImageFitType[] = ['fill', 'contain', 'cover', 'none', 'scale-down'];
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
</script>
