<script setup lang="ts">
// 故意添加未使用的导入和变量来测试规则
import { formatDate, debounce } from './utils'; // 未使用的导入
import { ref, reactive, computed, watch } from 'vue'; // watch未使用

import type { User } from './utils'; // 未使用的类型

// 未使用的变量
const unusedVariable = 'I am not used anywhere';
const _intentionallyUnused = 'This starts with _ so it should be ignored';
const a: any = '';
if (a == 123) {
}

// 定义响应式数据
const count = ref(0);
const user = reactive({
  name: 'Admin',
  role: 'administrator',
});

// 计算属性
const doubleCount = computed(() => count.value * 2);

// 方法
const increment = () => {
  count.value++;
};

const updateUser = (newName: string) => {
  user.name = newName;
};
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <h1>Admin Core System</h1>
      <p>欢迎使用管理系统核心模块</p>
    </header>

    <main class="app-content">
      <section class="counter-section">
        <h2>计数器示例</h2>
        <p>当前计数: {{ count }}</p>
        <p>双倍计数: {{ doubleCount }}</p>
        <button
          asd="iuy"
          asda="asd123"
          asdasdasdasd="123"
          asdfghj="123"
          asdg="123"
          class="asdasdasdasdasdasd 12312 asd asd"
          ghjkl="123"
          sik="123"
          type="button"
          @click="increment"
        >
          123
        </button>
      </section>

      <section class="user-section">
        <h2>用户信息</h2>
        <p>用户名: {{ user.name }}</p>
        <p>角色: {{ user.role }}</p>
        <button type="button" @click="updateUser('新管理员')">更新用户名</button>
      </section>
    </main>

    <footer class="app-footer">
      <p>
        访问
        <a href="https://vuejs.org/" rel="noopener" target="_blank"> Vue.js 官网 </a>
        了解更多
      </p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.app-header {
  text-align: center;
  margin-bottom: 40px;
}

.app-header h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.app-content {
  display: grid;
  gap: 30px;
  margin-bottom: 40px;
}

.counter-section,
.user-section {
  padding: 20px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.counter-section h2,
.user-section h2 {
  color: #495057;
  margin-bottom: 15px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.app-footer {
  text-align: center;
  color: #6c757d;
  border-top: 1px solid #dee2e6;
  padding-top: 20px;
}

.app-footer a {
  color: #007bff;
  text-decoration: none;
}

.app-footer a:hover {
  text-decoration: underline;
}
</style>
