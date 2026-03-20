<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div id="menu-anchor">
        <span>Menu 菜单</span>
      </div>
    </template>
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item disabled index="3">Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
    <div class="h-6"></div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      :default-active="activeIndex2"
      mode="horizontal"
      text-color="#fff"
    >
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item disabled index="3">Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
    <el-row>
      <el-col :span="12">
        <h5 class="mb-2">Default colors</h5>
        <el-menu default-active="2">
          <el-sub-menu index="1">
            <template #title>
              <i-ep-location />
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <i-ep-menu />

            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item disabled index="3">
            <i-ep-document />
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i-ep-setting />
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="12">
        <h5 class="mb-2">Custom colors</h5>
        <el-menu active-text-color="#ffd04b" background-color="#545c64" default-active="2" text-color="#fff">
          <el-sub-menu index="1">
            <template #title>
              <i-ep-location />
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <i-ep-menu />
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item disabled index="3">
            <i-ep-document />
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i-ep-setting />

            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref('1');
const activeIndex2 = ref('1');
</script>
