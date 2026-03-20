<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Tooltip 文字提示</span>
      </div>
    </template>
    <div class="w-150">
      <div class="flex items-center justify-center">
        <el-tooltip class="mt-2.5 w-27.5" content="Top Left prompts info" effect="dark" placement="top-start">
          <el-button>top-start</el-button>
        </el-tooltip>
        <el-tooltip class="mt-2.5 w-27.5" content="Top Center prompts info" effect="dark" placement="top">
          <el-button>top</el-button>
        </el-tooltip>
        <el-tooltip class="mt-2.5 w-27.5" content="Top Right prompts info" effect="dark" placement="top-end">
          <el-button>top-end</el-button>
        </el-tooltip>
      </div>
      <div class="flex items-center justify-between">
        <el-tooltip class="mt-2.5 w-27.5" content="Left Top prompts info" effect="dark" placement="left-start">
          <el-button>left-start</el-button>
        </el-tooltip>
        <el-tooltip class="mt-2.5 w-27.5" content="Right Top prompts info" effect="dark" placement="right-start">
          <el-button>right-start</el-button>
        </el-tooltip>
      </div>
      <div class="flex items-center justify-between">
        <el-tooltip class="mt-2.5 w-27.5" content="Left Center prompts info" effect="dark" placement="left">
          <el-button class="mt-3 mb-3">left</el-button>
        </el-tooltip>
        <el-tooltip class="mt-2.5 w-27.5" content="Right Center prompts info" effect="dark" placement="right">
          <el-button>right</el-button>
        </el-tooltip>
      </div>
      <div class="flex items-center justify-between">
        <el-tooltip class="mt-2.5 w-27.5" content="Left Bottom prompts info" effect="dark" placement="left-end">
          <el-button>left-end</el-button>
        </el-tooltip>
        <el-tooltip class="mt-2.5 w-27.5" content="Right Bottom prompts info" effect="dark" placement="right-end">
          <el-button>right-end</el-button>
        </el-tooltip>
      </div>
      <div class="flex items-center justify-center">
        <el-tooltip class="mt-2.5 w-27.5" content="Bottom Left prompts info" effect="dark" placement="bottom-start">
          <el-button>bottom-start</el-button>
        </el-tooltip>
        <el-tooltip class="mt-2.5 w-27.5" content="Bottom Center prompts info" effect="dark" placement="bottom">
          <el-button>bottom</el-button>
        </el-tooltip>
        <el-tooltip class="mt-2.5 w-27.5" content="Bottom Right prompts info" effect="dark" placement="bottom-end">
          <el-button>bottom-end</el-button>
        </el-tooltip>
      </div>
    </div>
  </el-card>
</template>
