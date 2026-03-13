<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>TimePicker 时间选择器</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-time-picker v-model="value1" placeholder="Arbitrary time" />
      <el-time-picker v-model="value2" arrow-control placeholder="Arbitrary time" />
      <el-time-picker
        v-model="value3"
        end-placeholder="End time"
        is-range
        range-separator="To"
        start-placeholder="Start time"
      />
      <el-time-picker
        v-model="value4"
        arrow-control
        end-placeholder="End time"
        is-range
        range-separator="To"
        start-placeholder="Start time"
      />
      <el-time-select v-model="value" class="w-60!" end="18:30" placeholder="Select time" start="08:30" step="00:15" />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const value1 = ref();
const value2 = ref();

const value3 = ref<[Date, Date]>([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]);
const value4 = ref<[Date, Date]>([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]);
</script>

<style scoped>
@reference "tailwindcss";

:deep(.el-date-editor) {
  @apply m-2;
}
</style>
