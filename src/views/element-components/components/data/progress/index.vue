<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Progress 进度条</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <div class="demo-progress w-full">
        <el-progress class="mb-3.75 max-w-150" :percentage="50" />
        <el-progress class="mb-3.75 max-w-150" :format="format" :percentage="100" />
        <el-progress class="mb-3.75 max-w-150" :percentage="100" status="success" />
        <el-progress class="mb-3.75 max-w-150" :percentage="100" status="warning" />
        <el-progress class="mb-3.75 max-w-150" :percentage="50" status="exception" />
      </div>
      <div class="demo-progress w-full">
        <el-progress class="mb-3.75 max-w-150" :percentage="70" :stroke-width="26" :text-inside="true" />
        <el-progress
          class="mb-3.75 max-w-150"
          :percentage="100"
          status="success"
          :stroke-width="24"
          :text-inside="true"
        />
        <el-progress
          class="mb-3.75 max-w-150"
          :percentage="80"
          status="warning"
          :stroke-width="22"
          :text-inside="true"
        />
        <el-progress
          class="mb-3.75 max-w-150"
          :percentage="50"
          status="exception"
          :stroke-width="20"
          :text-inside="true"
        />
      </div>
      <div class="demo-progress w-full">
        <el-progress class="mb-3.75 max-w-150" :percentage="0" type="circle" />
        <el-progress class="mb-3.75 max-w-150" :percentage="25" type="circle" />
        <el-progress class="mb-3.75 max-w-150" :percentage="100" status="success" type="circle" />
        <el-progress class="mb-3.75 max-w-150" :percentage="70" status="warning" type="circle" />
        <el-progress class="mb-3.75 max-w-150" :percentage="50" status="exception" type="circle" />
      </div>
      <div class="demo-progress w-full">
        <el-progress class="mb-3.75 max-w-150" :indeterminate="true" :percentage="50" />
        <el-progress class="mb-3.75 max-w-150" :format="format" :indeterminate="true" :percentage="100" />
        <el-progress class="mb-3.75 max-w-150" :duration="5" :indeterminate="true" :percentage="100" status="success" />
        <el-progress class="mb-3.75 max-w-150" :duration="1" :indeterminate="true" :percentage="100" status="warning" />
        <el-progress class="mb-3.75 max-w-150" :indeterminate="true" :percentage="50" status="exception" />
      </div>
      <div class="demo-progress w-full">
        <el-progress class="mb-3.75 max-w-150" :percentage="50" striped :stroke-width="15" />
        <el-progress
          class="mb-3.75 max-w-150"
          :percentage="30"
          status="warning"
          striped
          striped-flow
          :stroke-width="15"
        />
        <el-progress
          class="mb-3.75 max-w-150"
          :duration="10"
          :percentage="100"
          status="success"
          striped
          striped-flow
          :stroke-width="15"
        />
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import type { ProgressFn } from 'element-plus';

const format: ProgressFn = percentage => (percentage === 100 ? 'Full' : `${percentage}%`);
</script>
