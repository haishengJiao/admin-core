<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Skeleton 骨架屏</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-skeleton class="w-full" />
      <el-skeleton class="[--el-skeleton-circle-size:100px]!">
        <template #template>
          <el-skeleton-item variant="circle" />
        </template>
      </el-skeleton>
    </div>
    <el-skeleton animated class="mt-1" :rows="5" />
  </el-card>
</template>
