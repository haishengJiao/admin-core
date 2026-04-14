<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Text 文本</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-calendar v-model="value" />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(new Date());
</script>
