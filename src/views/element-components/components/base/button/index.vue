<template>
  <el-card class="w-full">
    <template #header>
      <div>
        <span>Button 按钮</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-button plain>Plain</el-button>
      <el-button plain type="primary">Primary</el-button>
      <el-button plain type="success">Success</el-button>
      <el-button plain type="info">Info</el-button>
      <el-button plain type="warning">Warning</el-button>
      <el-button plain type="danger">Danger</el-button>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-button round>Round</el-button>
      <el-button round type="primary">Primary</el-button>
      <el-button round type="success">Success</el-button>
      <el-button round type="info">Info</el-button>
      <el-button round type="warning">Warning</el-button>
      <el-button round type="danger">Danger</el-button>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-button circle>
        <template #icon><i-ep-search /></template>
      </el-button>
      <el-button circle type="primary">
        <template #icon><i-ep-edit /></template>
      </el-button>
      <el-button circle type="success">
        <template #icon><i-ep-check /></template>
      </el-button>
      <el-button circle type="info">
        <template #icon><i-ep-message /></template>
      </el-button>
      <el-button circle type="warning">
        <template #icon><i-ep-star /></template>
      </el-button>
      <el-button circle type="danger">
        <template #icon><i-ep-delete /></template>
      </el-button>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-button disabled>Default</el-button>
      <el-button disabled type="primary">Primary</el-button>
      <el-button disabled type="success">Success</el-button>
      <el-button disabled type="info">Info</el-button>
      <el-button disabled type="warning">Warning</el-button>
      <el-button disabled type="danger">Danger</el-button>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-button disabled plain>Plain</el-button>
      <el-button disabled plain type="primary">Primary</el-button>
      <el-button disabled plain type="success">Success</el-button>
      <el-button disabled plain type="info">Info</el-button>
      <el-button disabled plain type="warning">Warning</el-button>
      <el-button disabled plain type="danger">Danger</el-button>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-button v-for="button in buttons" :key="button.text" text :type="button.type">
        {{ button.text }}
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const;
</script>

<style scoped>
@reference "tailwindcss";

.el-button + .el-button {
  @apply m-0;
}
</style>
