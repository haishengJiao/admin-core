<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Text 文本</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-slider v-model="value1" />
      <el-slider v-model="value2" disabled />
      <el-slider v-model="value3" show-stops :step="10" />
      <el-slider v-model="value4" show-input />
      <el-slider v-model="value5" :max="10" range show-stops />
      <el-slider v-model="value" height="200px" vertical />
      <el-slider v-model="value6" :marks="marks" range />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

import type { CSSProperties } from 'vue';

const value = ref(0);
const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
const value5 = ref([4, 8]);

interface Mark {
  style: CSSProperties;
  label: string;
}

type Marks = Record<number, Mark | string>;

const value6 = ref([30, 60]);
const marks = reactive<Marks>({
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: '#1989FA',
    },
    label: '50%',
  },
});
</script>
