<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Alert 提示</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-alert title="Success alert" type="success" />
      <el-alert title="Info alert" type="info" />
      <el-alert title="Warning alert" type="warning" />
      <el-alert title="Error alert" type="error" />

      <el-alert effect="dark" title="Success alert" type="success" />
      <el-alert effect="dark" title="Primary alert" type="primary" />
      <el-alert effect="dark" title="Info alert" type="info" />
      <el-alert effect="dark" title="Warning alert" type="warning" />
      <el-alert effect="dark" title="Error alert" type="error" />

      <el-alert description="More text description" show-icon title="Success alert" type="success" />
      <el-alert description="More text description" show-icon title="Info alert" type="info" />
      <el-alert description="More text description" show-icon title="Warning alert" type="warning" />
      <el-alert description="More text description" show-icon title="Error alert" type="error" />
    </div>
  </el-card>
</template>
