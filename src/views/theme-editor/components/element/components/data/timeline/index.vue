<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Timeline 时间线</span>
      </div>
    </template>
    <el-timeline class="max-w-150">
      <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
    <el-timeline class="max-w-150">
      <el-timeline-item center placement="top" timestamp="2018/4/12">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item placement="top" timestamp="2018/4/3">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item center placement="top" timestamp="2018/4/2"> Event start </el-timeline-item>
      <el-timeline-item placement="top" timestamp="2018/4/2"> Event end </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<script lang="ts" setup>
const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
];
</script>
