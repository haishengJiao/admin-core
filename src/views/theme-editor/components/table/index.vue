<template>
  <el-table border class="w-full" :data="data" row-key="id" :show-header="false">
    <el-table-column type="expand" width="40">
      <template #default="{ row }: { row: CssVarItem }">
        <div class="px-2">
          <div v-if="row.desc" class="text-muted-foreground pb-2">{{ row.desc }}</div>
          <div v-if="row.depended.length" class="flex flex-wrap gap-1 pb-2">
            <el-tag v-for="tag in row.depended" :key="tag" type="info">{{ tag }}</el-tag>
          </div>
          <div class="flex gap-2">
            <template v-if="groupType === DataItemType.COLORS">
              <el-color-picker
                v-if="typeof row.value === 'string'"
                v-model="row.value"
                :show-alpha="row.type === 'color-rgba'"
                @change="emits('updateCssVar', row)"
                @clear="emits('reset', row)"
              />
            </template>
            <template v-else-if="groupType === DataItemType.SIZE">
              <el-input-number
                v-if="typeof row.value === 'number'"
                v-model="row.value"
                :max="row.type === 'fontWeight' ? 900 : Number.MAX_SAFE_INTEGER"
                :min="row.type === 'fontWeight' ? 100 : 1"
                :step="row.type === 'fontWeight' ? 100 : 1"
                @change="emits('sizeChange', row)"
              />
            </template>
            <template v-else-if="groupType === DataItemType.STYLES">
              <el-input-number
                v-if="row.type === 'borderRadius' && typeof row.value === 'number'"
                v-model="row.value"
                :min="1"
                @change="emits('sizeChange', row)"
              />
              <el-input
                v-else-if="row.type === 'boxShadow'"
                v-model="row.value"
                style="width: 80%"
                @change="emits('sizeChange', row)"
              />
            </template>
            <template v-else-if="groupType === DataItemType.OTHER">
              <el-input-number
                v-if="row.type === 'borderWidth' && typeof row.value === 'number'"
                v-model="row.value"
                :min="1"
                @change="emits('sizeChange', row)"
              />
              <el-input
                v-else-if="row.type === 'borderStyle'"
                v-model="row.value"
                style="width: 80%"
                @change="emits('sizeChange', row)"
              />
            </template>
            <el-button link type="primary" @click="emits('reset', row)">重置</el-button>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column>
      <template #default="{ row }: { row: CssVarItem }">
        {{ row.name }} | {{ row.cssVar }} | {{ row.value }}{{ row.unit }}
      </template>
    </el-table-column>
    <el-table-column :width="groupType === DataItemType.COLORS ? 60 : 80">
      <template #default="{ row }: { row: CssVarItem }">
        <template v-if="groupType === DataItemType.COLORS">
          <div class="h-5.5" :style="{ backgroundColor: String(row.value) }"></div>
        </template>
        <template v-if="groupType === DataItemType.SIZE">
          <div
            v-if="row.type === 'fontSize'"
            class="flex h-12 items-center justify-center text-black"
            :style="{ fontSize: `${row.value}${row.unit}`, background: `url(${backgroundImage})` }"
          >
            <span>Aa</span>
          </div>
          <div
            v-if="row.type === 'lineHeight'"
            class="flex h-12 items-center justify-center text-black"
            :style="{ background: `url(${backgroundImage})` }"
          >
            <div
              class="flex w-full items-center justify-center"
              style="background-color: rgb(255 242 240)"
              :style="{ height: `${row.value}${row.unit}` }"
            >
              <span>Aa</span>
            </div>
          </div>
          <div
            v-if="row.type === 'fontWeight'"
            class="flex h-12 items-center justify-center text-black"
            :style="{ fontWeight: row.value, background: `url(${backgroundImage})` }"
          >
            <span>Aa</span>
          </div>
        </template>
        <template v-if="groupType === DataItemType.STYLES">
          <div
            v-if="row.type === 'borderRadius'"
            class="flex h-12 items-center justify-center overflow-hidden"
            :style="{ background: `url(${backgroundImage})` }"
          >
            <div
              class="h-12 w-full translate-x-1/3 translate-y-1/3 border border-solid border-gray-600 bg-white"
              :style="{ borderRadius: `${row.value}${row.unit}` }"
            ></div>
          </div>
          <div
            v-if="row.type === 'boxShadow'"
            class="flex h-12 items-center justify-center overflow-hidden"
            :style="{ background: `url(${backgroundImage})` }"
          >
            <div
              class="h-8 w-8 border border-solid border-gray-200 bg-white"
              :style="{ boxShadow: String(row.value) }"
            ></div>
          </div>
        </template>
        <template v-if="groupType === DataItemType.OTHER">
          <div
            v-if="row.type === 'borderWidth'"
            class="flex h-12 items-center justify-center overflow-hidden"
            :style="{ background: `url(${backgroundImage})` }"
          >
            <div
              class="h-12 w-full translate-x-1/3 translate-y-1/3 border border-solid border-gray-600 bg-white"
              :style="{ borderWidth: `${row.value}${row.unit}` }"
            ></div>
          </div>
          <div
            v-if="row.type === 'borderStyle'"
            class="flex h-12 items-center justify-center overflow-hidden"
            :style="{ background: `url(${backgroundImage})` }"
          >
            <div
              class="h-8 w-8 border border-solid border-gray-500 bg-white"
              :style="{ borderStyle: String(row.value) }"
            ></div>
          </div>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { DataItemType } from '../../types';

import type { TableProps, TableEmits, CssVarItem } from '../../types';

const { data = [] } = defineProps<TableProps>();
const emits = defineEmits<TableEmits>();
</script>
