<template>
  <div class="flex h-full flex-col px-5">
    <el-card class="mt-5">
      <div class="flex items-center justify-end">
        <div class="ml-3 flex items-center">
          <el-switch v-model="autoColorCalc" />
          <div class="ml-2 flex items-center">
            <span class="mr-1">自动计算</span>
            <el-tooltip content="设置主色调自动计算辅助色调">
              <i-ep-question-filled class="text-muted-foreground" />
            </el-tooltip>
          </div>
        </div>
        <el-dropdown placement="bottom">
          <el-button class="ml-3">下载</el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleDownloadModify">下载修改</el-dropdown-item>
              <el-dropdown-item @click="handleDownloadAll">下载全部</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button class="ml-3" type="primary" @click="handleAllReset">全部重置</el-button>
      </div>
    </el-card>
    <el-row class="flex-1 overflow-hidden py-5" :gutter="20">
      <el-col class="h-full" :span="8">
        <el-card body-class="p-0! h-full flex flex-col" class="h-full">
          <div class="h-full p-4">
            <el-tabs class="h-full">
              <el-tab-pane
                v-for="categoryGroup in data"
                :key="categoryGroup.type"
                class="h-full"
                :label="categoryGroup.label"
              >
                <el-scrollbar height="100%" view-class="w-full min-h-full h-auto">
                  <el-collapse v-model="activeNames">
                    <el-collapse-item
                      v-for="category in categoryGroup.data"
                      :key="category.type"
                      :name="category.type"
                      :title="category.name"
                    >
                      <el-table border class="w-full" :data="category.data" row-key="id" :show-header="false">
                        <el-table-column type="expand" width="40">
                          <template #default="{ row }: { row: CssVarItem }">
                            <div class="px-2">
                              <div v-if="row.desc" class="text-muted-foreground pb-2">{{ row.desc }}</div>
                              <div v-if="row.depended.length" class="flex flex-wrap gap-1 pb-2">
                                <el-tag v-for="tag in row.depended" :key="tag" type="info">{{ tag }}</el-tag>
                              </div>
                              <div class="flex gap-2">
                                <template v-if="categoryGroup.type === DataItemType.COLORS">
                                  <el-color-picker
                                    v-if="typeof row.value === 'string'"
                                    v-model="row.value"
                                    :show-alpha="row.type === 'color-rgba'"
                                    @change="handleUpdateCssVar(row)"
                                    @clear="handleReset(row)"
                                  />
                                </template>
                                <template v-else-if="categoryGroup.type === DataItemType.SIZE">
                                  <el-input-number
                                    v-if="typeof row.value === 'number'"
                                    v-model="row.value"
                                    :max="row.type === 'fontWeight' ? 900 : Number.MAX_SAFE_INTEGER"
                                    :min="row.type === 'fontWeight' ? 100 : 1"
                                    :step="row.type === 'fontWeight' ? 100 : 1"
                                    @change="handleSizeChange(row)"
                                  />
                                </template>
                                <template v-else-if="categoryGroup.type === DataItemType.STYLES">
                                  <el-input-number
                                    v-if="row.type === 'borderRadius' && typeof row.value === 'number'"
                                    v-model="row.value"
                                    :min="1"
                                    @change="handleSizeChange(row)"
                                  />
                                  <el-input
                                    v-else-if="row.type === 'boxShadow'"
                                    v-model="row.value"
                                    style="width: 80%"
                                    @change="handleSizeChange(row)"
                                  />
                                </template>
                                <template v-else-if="categoryGroup.type === DataItemType.OTHER">
                                  <el-input-number
                                    v-if="row.type === 'borderWidth' && typeof row.value === 'number'"
                                    v-model="row.value"
                                    :min="1"
                                    @change="handleSizeChange(row)"
                                  />
                                  <el-input
                                    v-else-if="row.type === 'borderStyle'"
                                    v-model="row.value"
                                    style="width: 80%"
                                    @change="handleSizeChange(row)"
                                  />
                                </template>
                                <el-button link type="primary" @click="handleReset(row)">重置</el-button>
                              </div>
                            </div>
                          </template>
                        </el-table-column>
                        <el-table-column>
                          <template #default="{ row }: { row: CssVarItem }">
                            {{ row.name }} | {{ row.cssVar }} | {{ row.value }}{{ row.unit }}
                          </template>
                        </el-table-column>
                        <el-table-column :width="categoryGroup.type === DataItemType.COLORS ? 60 : 80">
                          <template #default="{ row }: { row: CssVarItem }">
                            <template v-if="categoryGroup.type === DataItemType.COLORS">
                              <div class="h-5.5" :style="{ backgroundColor: String(row.value) }"></div>
                            </template>
                            <template v-if="categoryGroup.type === DataItemType.SIZE">
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
                            <template v-if="categoryGroup.type === DataItemType.STYLES">
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
                            <template v-if="categoryGroup.type === DataItemType.OTHER">
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
                    </el-collapse-item>
                  </el-collapse>
                </el-scrollbar>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </el-col>
      <el-col class="h-full" :span="16">
        <el-card body-class="p-0! h-full flex flex-col" class="h-full">
          <el-scrollbar height="100%" view-class="w-full min-h-full h-auto" wrap-class="theme-editor-scrollbar-wrap">
            <div
              ref="elementPlusComponents"
              class="[--el-border:var(--el-border-width)_var(--el-border-style)_var(--el-border-color)]"
            >
              <ElementPlusComponents />
            </div>
          </el-scrollbar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, useTemplateRef, watch, computed, defineAsyncComponent } from 'vue';

import { colors, size, styles, other, backgroundImage } from './common/index';
import { DataItemType } from './types/index';

import type { CssVarItem, DataItem } from './types/index';
import type { Ref } from 'vue';

import { useThemeStore } from '@/store';
import { mixColor } from '@/utils/colors';
import { downloadCssFile } from '@/utils/file';

const ElementPlusComponents = defineAsyncComponent({
  loader: () => import('./components/element/index.vue'),
});

const theme = useThemeStore();

const data = ref<DataItem[]>([
  { label: '颜色', type: DataItemType.COLORS, data: colors },
  { label: '尺寸', type: DataItemType.SIZE, data: size },
  { label: '风格', type: DataItemType.STYLES, data: styles },
  { label: '其他', type: DataItemType.OTHER, data: other },
]);
const colorsComputed = computed(() => {
  return data.value.find(categoryGroup => categoryGroup.type === DataItemType.COLORS);
});
const autoColorCalc = ref(true);
const activeNames = ref('');
const elementPlusComponentsRef = useTemplateRef('elementPlusComponents');
const modifyCssVar: Ref<Record<string, string>> = ref({});

const updateModifyCssVar = (cssVar: string, value: string, isDelete: boolean = false) => {
  if (isDelete) {
    delete modifyCssVar.value[cssVar];
  } else {
    modifyCssVar.value[cssVar] = value;
  }
};

const handleRecomputeColor = (property: string, value: string, isDelete: boolean = false) => {
  const match = property.match(/^--el-color-(\w+)$/);
  if (!match) return;
  const type = match[1];
  const colorData = colorsComputed.value?.data.find(item => item.type === type);
  if (!colorData) return;

  colorData.data.forEach(item => {
    if (item.cssVar === property) return;
    let computedColor: string | undefined;
    const light = item.cssVar.match(/light-(\d+)$/);
    const dark = item.cssVar.match(/dark-(\d+)$/);

    if (light) {
      const level = Number(light[1]) / 10;
      if (theme.isLight) {
        computedColor = mixColor('#ffffff', value, level);
      } else {
        computedColor = mixColor('#141414', value, level);
      }
    } else if (dark) {
      const level = Number(dark[1]) / 10;
      if (theme.isLight) {
        computedColor = mixColor('#000000', value, level);
      } else {
        computedColor = mixColor('#ffffff', value, level);
      }
    }
    if (computedColor) {
      item.value = computedColor;
      handleSetCssVariable(item.cssVar, computedColor);
      updateModifyCssVar(item.cssVar, computedColor, isDelete);
    }
  });
};

const handleUpdateCssVar = (row: CssVarItem, isDelete: boolean = false) => {
  const value = row.value + row.unit;
  handleSetCssVariable(row.cssVar, value);
  updateModifyCssVar(row.cssVar, value, isDelete);

  if (autoColorCalc.value && typeof row.value === 'string') {
    handleRecomputeColor(row.cssVar, row.value, isDelete);
  }
};

const handleSizeChange = (row: CssVarItem) => {
  if (row.value === null) {
    row.value = theme.isLight ? row.originValue : row.darkOriginValue;
  }
  handleUpdateCssVar(row);
};

const handleReset = (row: CssVarItem) => {
  row.value = theme.isLight ? row.originValue : row.darkOriginValue;
  handleUpdateCssVar(row, true);
};

const handleSetCssVariable = (property: string, value: string) => {
  elementPlusComponentsRef.value?.style.setProperty(property, value);
};

const handleDownloadModify = () => {
  let cssContent = '';
  for (const key in modifyCssVar.value) {
    if (Object.prototype.hasOwnProperty.call(modifyCssVar.value, key)) {
      const value = modifyCssVar.value[key];
      cssContent += `  ${key}: ${value};\n`;
    }
  }
  handleDownload(cssContent);
};

const handleDownloadAll = () => {
  let cssContent = '';
  data.value.forEach(categoryGroup => {
    categoryGroup.data.forEach((category, categoryIndex) => {
      if (categoryIndex !== 0) {
        cssContent += '\n';
      }
      cssContent += `  /* ${category.name} */\n`;
      category.data.forEach(item => {
        cssContent += `  ${item.cssVar}: ${item.value + item.unit};\n`;
      });
    });
  });
  handleDownload(cssContent);
};

const handleDownload = (cssContent: string) => {
  const selector = theme.isLight ? ':root:root {\n' : ':root:root.dark {\n';
  cssContent = selector + cssContent;
  cssContent += '}\n';
  const filename = theme.isLight ? 'element-plus-light.css' : 'element-plus-dark.css';
  downloadCssFile(cssContent, filename);
};

const handleAllReset = () => {
  data.value.forEach(categoryGroup => {
    categoryGroup.data.forEach(category => {
      category.data.forEach(item => {
        handleReset(item);
      });
    });
  });
};

watch(
  () => theme.effectiveTheme,
  () => {
    requestAnimationFrame(() => {
      handleGetRootStyles();
    });
  },
);

const handleGetRootStyles = () => {
  const rootStyles = getComputedStyle(document.documentElement);
  data.value.forEach(categoryGroup => {
    categoryGroup.data.forEach(category => {
      category.data.forEach(item => {
        if (item.unit) {
          item.value = parseFloat(rootStyles.getPropertyValue(item.cssVar));
        } else {
          item.value = rootStyles.getPropertyValue(item.cssVar);
        }
        requestAnimationFrame(() => {
          handleSetCssVariable(item.cssVar, item.value + item.unit);
        });
      });
    });
  });
};

onMounted(() => {
  const mainScrollbarView = document.querySelector('.main-scrollbar-wrap .el-scrollbar__view') as HTMLElement;
  mainScrollbarView.style.height = '100%';

  handleGetRootStyles();
});
</script>
