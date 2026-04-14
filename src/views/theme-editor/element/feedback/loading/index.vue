<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Loading 加载</span>
      </div>
    </template>
    <el-table v-loading="loading" :data="tableData">
      <el-table-column label="Date" prop="date" width="180" />
      <el-table-column label="Name" prop="name" width="180" />
      <el-table-column label="Address" prop="address" />
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(true);

const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
];
</script>
