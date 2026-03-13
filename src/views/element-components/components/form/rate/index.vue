<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Rate 评分</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-rate v-model="value1" />
      <el-rate v-model="value2" :colors="colors" />
      <el-rate v-model="value" allow-half />
      <el-rate v-model="value" show-text :texts="['oops', 'disappointed', 'normal', 'good', 'great']" />
      <el-rate v-model="value" disabled score-template="{value} points" show-score text-color="#ff9900" />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(3.7);
const value1 = ref(0);
const value2 = ref(0);
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']); // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>
