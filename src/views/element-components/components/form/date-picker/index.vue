<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>DatePicker 日期选择器</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-radio-group v-model="size" label="size control">
        <el-radio-button value="large">large</el-radio-button>
        <el-radio-button value="default">default</el-radio-button>
        <el-radio-button value="small">small</el-radio-button>
      </el-radio-group>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <div class="flex items-center">
        <span class="mr-2">Default</span>
        <el-date-picker v-model="value1" placeholder="Pick a day" :size="size" type="date" />
      </div>
      <div class="flex items-center">
        <span class="mr-2">Picker with quick options</span>
        <el-date-picker
          v-model="value2"
          :disabled-date="disabledDate"
          placeholder="Pick a day"
          :shortcuts="shortcuts"
          :size="size"
          type="date"
        />
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref<'default' | 'large' | 'small'>('default');

const value1 = ref('');
const value2 = ref('');

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};
</script>
