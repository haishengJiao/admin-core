<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Tabs 标签页</span>
      </div>
    </template>
    <el-tabs v-model="activeName">
      <el-tab-pane class="p-8 text-3xl font-semibold text-[#6b778c]" label="User" name="first">User</el-tab-pane>
      <el-tab-pane class="p-8 text-3xl font-semibold text-[#6b778c]" label="Config" name="second"> Config </el-tab-pane>
      <el-tab-pane class="p-8 text-3xl font-semibold text-[#6b778c]" label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane class="p-8 text-3xl font-semibold text-[#6b778c]" label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeName = ref('first');
</script>
