<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Radio 单选框</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-radio-group v-model="radio1" class="ml-4">
        <el-radio size="large" value="New York">Option 1</el-radio>
        <el-radio size="large" value="Washington">Option 2</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio2" class="ml-4">
        <el-radio value="New York">Option 1</el-radio>
        <el-radio value="Washington">Option 2</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio3" class="ml-4">
        <el-radio size="small" value="New York">Option 1</el-radio>
        <el-radio size="small" value="Washington">Option 2</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio3" class="ml-4" disabled>
        <el-radio size="small" value="New York">Option 1</el-radio>
        <el-radio size="small" value="Washington">Option 2</el-radio>
      </el-radio-group>
    </div>

    <div class="mt-1 flex flex-wrap gap-2">
      <el-radio-group v-model="radio1" size="large">
        <el-radio-button label="New York" value="New York" />
        <el-radio-button label="Washington" value="Washington" />
        <el-radio-button label="Los Angeles" value="Los Angeles" />
        <el-radio-button label="Chicago" value="Chicago" />
      </el-radio-group>

      <el-radio-group v-model="radio2">
        <el-radio-button label="New York" value="New York" />
        <el-radio-button label="Washington" value="Washington" />
        <el-radio-button label="Los Angeles" value="Los Angeles" />
        <el-radio-button label="Chicago" value="Chicago" />
      </el-radio-group>

      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="New York" value="New York" />
        <el-radio-button disabled label="Washington" value="Washington" />
        <el-radio-button label="Los Angeles" value="Los Angeles" />
        <el-radio-button label="Chicago" value="Chicago" />
      </el-radio-group>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-radio-group v-model="radio1">
        <el-radio border size="large" value="New York">Option A</el-radio>
        <el-radio border size="large" value="Washington">Option B</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio2">
        <el-radio border value="New York">Option A</el-radio>
        <el-radio border value="Washington">Option B</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio3" size="small">
        <el-radio border value="New York">Option A</el-radio>
        <el-radio border disabled value="Washington">Option B</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio4" disabled size="small">
        <el-radio border value="New York">Option A</el-radio>
        <el-radio border value="Washington">Option B</el-radio>
      </el-radio-group>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('New York');
const radio2 = ref('New York');
const radio3 = ref('New York');
const radio4 = ref('New York');
</script>
