<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Table 表格</span>
      </div>
    </template>

    <el-table border :data="tableData">
      <el-table-column label="Date" prop="date" width="180" />
      <el-table-column label="Name" prop="name" width="180" />
      <el-table-column label="Address" prop="address" />
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>
