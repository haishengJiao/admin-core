<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Notification 通知</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-button plain @click="open1"> Closes automatically </el-button>
      <el-button plain @click="open2"> Won't close automatically </el-button>
      <el-button plain @click="open3"> Success </el-button>
      <el-button plain @click="open4"> Warning </el-button>
      <el-button plain @click="open5"> Info </el-button>
      <el-button plain @click="open6"> Error </el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { h } from 'vue';

const open1 = () => {
  ElNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  });
};

const open2 = () => {
  ElNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  });
};

const open3 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  });
};

const open4 = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  });
};

const open5 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  });
};

const open6 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  });
};
</script>

<style scoped>
@reference "tailwindcss";

.el-button + .el-button {
  @apply m-0;
}
</style>
