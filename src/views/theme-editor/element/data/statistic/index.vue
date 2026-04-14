<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Statistic 统计组件</span>
      </div>
    </template>
    <el-row>
      <el-col class="text-center" :span="8">
        <el-statistic title="Daily active users" :value="268500" />
      </el-col>
      <el-col class="text-center" :span="8">
        <el-statistic :value="138">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Ratio of men to women

              <i-ep-male style="margin-left: 4px" />
            </div>
          </template>
          <template #suffix>/100</template>
        </el-statistic>
      </el-col>
      <el-col class="text-center" :span="8">
        <el-statistic title="Feedback number" :value="562">
          <template #suffix>
            <i-ep-chat-line-round style="vertical-align: -0.125em" />
          </template>
        </el-statistic>
      </el-col>
    </el-row>
  </el-card>
</template>
