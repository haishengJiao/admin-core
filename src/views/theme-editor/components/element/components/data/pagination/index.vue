<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Pagination 分页</span>
      </div>
    </template>
    <div>
      <div class="mb-4">When you have few pages</div>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <div class="mt-2.5">
      <div class="mb-4">When you have more than 7 pages</div>
      <el-pagination layout="prev, pager, next" :total="1000" />
    </div>
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </el-card>
</template>
