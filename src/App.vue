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
        <button sik="123" type="button" @click="increment">123</button>
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

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

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

<style scoped lang="scss">
.app-container {
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.app-header {
  margin-bottom: 40px;
  text-align: center;
}

.app-header h1 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.app-content {
  display: grid;
  gap: 30px;
  margin-bottom: 40px;
}

.counter-section,
.user-section {
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
}

.counter-section h2,
.user-section h2 {
  margin-bottom: 15px;
  color: #495057;
}

button {
  padding: 8px 16px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

.app-footer {
  padding-top: 20px;
  color: #6c757d;
  text-align: center;
  border-top: 1px solid #dee2e6;
}

.app-footer a {
  color: #007bff;
  text-decoration: none;
}

.app-footer a:hover {
  text-decoration: underline;
}
</style>
