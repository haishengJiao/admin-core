<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Dialog 对话框</span>
      </div>
    </template>
    <el-button plain @click="dialogVisible = true"> Click to open the Dialog </el-button>

    <el-dialog v-model="dialogVisible" align-center :before-close="handleClose" title="Tips" width="500">
      <span>This is a message</span>
      <template #footer>
        <div>
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>

    <el-button class="ml-2" plain @click="dialogVisible1 = true"> Open a draggable Dialog </el-button>
    <el-dialog v-model="dialogVisible1" draggable title="Tips" width="500">
      <span>It's a draggable Dialog</span>
      <template #footer>
        <div>
          <el-button @click="dialogVisible1 = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible1 = false"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dialogVisible = ref(false);

const dialogVisible1 = ref(false);

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>
