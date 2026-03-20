<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Anchor 锚点</span>
      </div>
    </template>
    <el-anchor :offset="70">
      <el-anchor-link href="#breadcrumb-anchor">面包屑</el-anchor-link>
      <el-anchor-link href="#menu-anchor">菜单</el-anchor-link>
    </el-anchor>
  </el-card>
</template>
