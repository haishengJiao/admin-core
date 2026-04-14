<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div id="breadcrumb-anchor">
        <span>Breadcrumb 面包屑</span>
      </div>
    </template>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>
</template>
