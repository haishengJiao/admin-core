<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Page Header 页头</span>
      </div>
    </template>
    <el-page-header @back="onBack">
      <template #breadcrumb>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }"> homepage </el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">route 1</a></el-breadcrumb-item>
          <el-breadcrumb-item>route 2</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #content>
        <div class="flex items-center">
          <el-avatar
            class="mr-3"
            :size="32"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="mr-3"> Title </span>
          <span class="mr-2 text-sm text-(--el-text-color-regular)"> Sub title </span>
          <el-tag>Default</el-tag>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <el-button @click="onPrint">Print</el-button>
          <el-button class="ml-2" type="primary" @click="onEdit">Edit</el-button>
          <el-button class="ml-2" type="danger" @click="onDelete">Delete</el-button>
        </div>
      </template>

      <el-descriptions class="mt-4" :column="3" size="small">
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
      <p class="mt-4 text-sm">
        Element Plus team uses <b>weekly</b> release strategy under normal circumstance, but critical bug fixes would
        require hotfix so the actual release number <b>could be</b> more than 1 per week.
      </p>
    </el-page-header>
  </el-card>
</template>

<script setup lang="ts">
const onBack = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  });
};

const onPrint = () => {
  ElMessage.error('Oops, this is a error message.');
};

const onEdit = () => {
  const loadingInstance = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.3)',
  });

  setTimeout(() => {
    loadingInstance.close();
  }, 2000);
};

const onDelete = () => {
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
</script>
