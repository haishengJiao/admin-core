<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Text 文本</span>
      </div>
    </template>
    <el-steps :active="active" class="w-full" finish-status="success">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>

    <el-steps :active="active" class="mb-4 w-full" simple :space="200">
      <el-step title="Step 1">
        <template #icon><i-ep-edit /></template>
      </el-step>
      <el-step title="Step 2">
        <template #icon><i-ep-upload-filled /></template>
      </el-step>
      <el-step title="Step 3">
        <template #icon><i-ep-picture /></template>
      </el-step>
    </el-steps>

    <el-steps :active="active" direction="vertical" style="height: 200px">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>

    <el-button class="mt-3" @click="next">Next step</el-button>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(0);

const next = () => {
  if (active.value++ > 2) active.value = 0;
};
</script>
