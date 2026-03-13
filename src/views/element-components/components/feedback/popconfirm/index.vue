<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Popconfirm 气泡确认框</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-popconfirm title="Are you sure to delete this?">
        <template #reference>
          <el-button>Delete</el-button>
        </template>
      </el-popconfirm>
    </div>
  </el-card>
</template>
