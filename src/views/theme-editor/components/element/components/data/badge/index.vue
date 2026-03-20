<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Badge 徽章</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-badge class="item" :value="12">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge class="item" :value="3">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge class="item" type="primary" :value="1">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge class="item" type="warning" :value="2">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge class="item" color="green" :value="1">
        <el-button>custom background</el-button>
      </el-badge>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Click Me
          <i-ep-caret-bottom />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="clearfix">
              comments
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              replies
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-badge class="item" :max="99" :value="200">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge class="item" :max="10" :value="100">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge class="item" is-dot>query</el-badge>
      <el-badge class="item" is-dot>
        <el-button class="share-button" type="primary">
          <template #icon><i-ep-share /></template>
        </el-button>
      </el-badge>
    </div>
  </el-card>
</template>

<script lang="ts" setup></script>
