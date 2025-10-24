<template>
  <div class="app-container">
    <header class="app-header">
      <h1>Admin Core System</h1>
      <nav class="navigation">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
      </nav>
      <p>欢迎使用管理系统核心模块</p>
    </header>

    <main class="app-content">
      <router-view />
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
// App 组件逻辑
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

.navigation {
  margin: 20px 0;
}

.navigation a {
  padding: 8px 16px;
  margin: 0 10px;
  color: white;
  text-decoration: none;
  background-color: #007bff;
  border-radius: 4px;
}

.navigation a.router-link-active {
  background-color: #0056b3;
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
