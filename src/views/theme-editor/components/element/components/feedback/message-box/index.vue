<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>MessageBox 消息弹框</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-button plain @click="open1">Click to open the Message Box</el-button>
      <el-button plain @click="open2">Common VNode</el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { h } from 'vue';

const open1 = () => {
  ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      });
    });
};

const open2 = () => {
  ElMessageBox({
    title: 'Message',
    message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
  });
};
</script>

<style scoped>
@reference "tailwindcss";

.el-button + .el-button {
  @apply m-0;
}
</style>
