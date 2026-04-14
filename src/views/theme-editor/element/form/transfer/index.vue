<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Transfer 穿梭框</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-transfer v-model="value" :data="data" />

      <el-transfer
        v-model="value"
        :data="data"
        :filter-method="filterMethod"
        filter-placeholder="State Abbreviations"
        filterable
      />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import type { TransferDataItem } from 'element-plus';

interface Option {
  key: number;
  label: string;
  disabled: boolean;
  initial: string;
}

const generateData = () => {
  const data: Option[] = [];
  const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
  const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
  states.forEach((city, index) => {
    data.push({
      label: city,
      key: index,
      initial: initials[index],
      disabled: index % 4 === 0,
    });
  });
  return data;
};

const data = ref<Option[]>(generateData());
const value = ref([]);

const filterMethod = (query: string, item: TransferDataItem) => {
  return item.initial.toLowerCase().includes(query.toLowerCase());
};
</script>
