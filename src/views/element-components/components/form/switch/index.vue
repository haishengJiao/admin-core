<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Switch 开关</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-switch v-model="value1" />
      <el-switch v-model="value2" class="ml-2 [--el-switch-off-color:#ff4949]! [--el-switch-on-color:#13ce66]!" />
      <el-switch v-model="value1" active-text="Pay by month" class="mb-2" inactive-text="Pay by year" />
      <el-switch v-model="value1">
        <template #active-icon>
          <i-ep-check />
        </template>
        <template #inactive-icon>
          <i-ep-close />
        </template>
      </el-switch>
      <el-switch v-model="value1" disabled />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
</script>
