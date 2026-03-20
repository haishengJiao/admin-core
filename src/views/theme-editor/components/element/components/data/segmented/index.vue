<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Segmented 分段控制器</span>
      </div>
    </template>
    <div class="flex flex-col items-start gap-4">
      <el-segmented v-model="value" :options="options" size="large" />
      <el-segmented v-model="value" :options="options" size="default" />
      <el-segmented v-model="value" :options="options" size="small" />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('Mon');

const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
</script>
