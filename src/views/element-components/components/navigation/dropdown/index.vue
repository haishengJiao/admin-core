<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Dropdown 下拉菜单</span>
      </div>
    </template>
    <el-dropdown>
      <span class="flex cursor-pointer items-center text-(--el-color-primary)">
        Dropdown List
        <i-ep-arrow-down />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-card>
</template>

<script lang="ts" setup></script>
