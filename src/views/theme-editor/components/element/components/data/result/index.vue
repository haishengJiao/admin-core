<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Result 结果</span>
      </div>
    </template>
    <el-row>
      <el-col :lg="6" :sm="12">
        <el-result icon="success" sub-title="Please follow the instructions" title="Success Tip">
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :lg="6" :sm="12">
        <el-result icon="warning" sub-title="Please follow the instructions" title="Warning Tip">
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :lg="6" :sm="12">
        <el-result icon="error" sub-title="Please follow the instructions" title="Error Tip">
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :lg="6" :sm="12">
        <el-result icon="info" title="Info Tip">
          <template #sub-title>
            <p>Using slot as subtitle</p>
          </template>
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-col>
    </el-row>
  </el-card>
</template>
