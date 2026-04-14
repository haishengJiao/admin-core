<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Link 链接</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-link href="https://element-plus.org" target="_blank">default</el-link>
      <el-link type="primary">primary</el-link>
      <el-link type="success">success</el-link>
      <el-link type="warning">warning</el-link>
      <el-link type="danger">danger</el-link>
      <el-link type="info">info</el-link>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-link disabled>default</el-link>
      <el-link disabled type="primary">primary</el-link>
      <el-link disabled type="success">success</el-link>
      <el-link disabled type="warning">warning</el-link>
      <el-link disabled type="danger">danger</el-link>
      <el-link disabled type="info">info</el-link>
    </div>
  </el-card>
</template>
