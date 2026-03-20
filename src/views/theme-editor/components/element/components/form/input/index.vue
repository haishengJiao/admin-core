<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Input 输入框</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <div>
        <el-input v-model="input" class="w-60!" placeholder="Please input" size="large" />
      </div>
      <div>
        <el-input v-model="input" class="w-60!" disabled placeholder="Please input" />
      </div>
      <form>
        <el-input v-model="input" class="w-60!" placeholder="Please input password" show-password type="password" />
      </form>
      <el-input-number v-model="num" :max="10" :min="1" />
      <el-input-number v-model="num" :disabled="true" />
      <el-input v-model="input1" class="max-w-150" placeholder="Please input">
        <template #prepend>Http://</template>
      </el-input>

      <el-input v-model="input2" class="max-w-150" placeholder="Please input">
        <template #append>.com</template>
      </el-input>

      <el-input v-model="input3" class="max-w-150" placeholder="Please input">
        <template #prepend>
          <el-select v-model="select" class="w-28.75!" placeholder="Select">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
        <template #append>
          <el-button>
            <template #icon><i-ep-search /></template>
          </el-button>
        </template>
      </el-input>

      <el-input v-model="input3" class="max-w-150" placeholder="Please input">
        <template #prepend>
          <el-button>
            <template #icon><i-ep-search /></template>
          </el-button>
        </template>
        <template #append>
          <el-select v-model="select" class="w-28.75!" placeholder="Select">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
      </el-input>
      <el-input v-model="textarea" class="w-80!" placeholder="Please input" :rows="2" type="textarea" />
      <el-input v-model="text" class="w-80!" maxlength="10" placeholder="Please input" show-word-limit type="text" />
      <el-input
        v-model="textarea"
        class="w-80!"
        maxlength="30"
        placeholder="Please input"
        show-word-limit
        type="textarea"
      />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const select = ref('');
const text = ref('');
const textarea = ref('');
const num = ref(1);
</script>
