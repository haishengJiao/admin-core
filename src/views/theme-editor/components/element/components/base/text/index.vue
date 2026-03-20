<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Text 文本</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-text class="mx-1">Default</el-text>
      <el-text class="mx-1" type="primary">Primary</el-text>
      <el-text class="mx-1" type="success">Success</el-text>
      <el-text class="mx-1" type="info">Info</el-text>
      <el-text class="mx-1" type="warning">Warning</el-text>
      <el-text class="mx-1" type="danger">Danger</el-text>
    </div>
  </el-card>
</template>
