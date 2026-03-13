<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Affix 固钉</span>
      </div>
    </template>
    <div class="affix-container h-100 rounded-[4px] bg-(--el-color-primary-light-9) text-center">
      <el-affix :offset="80" target=".affix-container">
        <el-button type="primary">Target container</el-button>
      </el-affix>
    </div>
  </el-card>
</template>
