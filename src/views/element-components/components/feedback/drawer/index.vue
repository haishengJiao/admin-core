<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Drawer 抽屉</span>
      </div>
    </template>
    <el-radio-group v-model="direction">
      <el-radio value="ltr">left to right</el-radio>
      <el-radio value="rtl">right to left</el-radio>
      <el-radio value="ttb">top to bottom</el-radio>
      <el-radio value="btt">bottom to top</el-radio>
    </el-radio-group>

    <el-button class="ml-4" type="primary" @click="drawer = true"> open </el-button>
    <el-button class="ml-4" type="primary" @click="drawer2 = true"> with footer </el-button>

    <el-drawer v-model="drawer" :before-close="handleClose" :direction="direction" title="I am the title">
      <span>Hi, there!</span>
    </el-drawer>
    <el-drawer v-model="drawer2" :direction="direction">
      <template #header>
        <h4>set title by slot</h4>
      </template>
      <template #default>
        <div>
          <el-radio v-model="radio1" size="large" value="Option 1">Option 1</el-radio>
          <el-radio v-model="radio1" size="large" value="Option 2">Option 2</el-radio>
        </div>
      </template>
      <template #footer>
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </template>
    </el-drawer>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import type { DrawerProps } from 'element-plus';

const drawer = ref(false);
const drawer2 = ref(false);
const direction = ref<DrawerProps['direction']>('rtl');
const radio1 = ref('Option 1');
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
function cancelClick() {
  drawer2.value = false;
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false;
    })
    .catch(() => {
      // catch error
    });
}
</script>
