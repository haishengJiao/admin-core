<template>
  <div class="home-container">
    <h1>首页</h1>
    <p>欢迎来到管理系统首页</p>

    <!-- 显示用户信息 -->
    <div class="user-info">
      <h2>用户信息</h2>
      <p>用户名: {{ userName }}</p>
    </div>

    <!-- 显示计数器 -->
    <div class="counter">
      <h2>计数器</h2>
      <p>当前计数: {{ count }}</p>
      <div class="counter-buttons">
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <h3>功能一</h3>
        <p>这是系统的核心功能之一</p>
      </div>
      <div class="feature-card">
        <h3>功能二</h3>
        <p>这是系统的另一个重要功能</p>
      </div>
      <div class="feature-card">
        <h3>功能三</h3>
        <p>更多功能等待您来探索</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Home 页面逻辑
import { storeToRefs } from 'pinia';

import { useCountStore, useUserStore } from '@/store';

// 使用 count store
const countStore = useCountStore();
const { count } = storeToRefs(countStore);
const { increment, decrement } = countStore;

// 使用 user store
const userStore = useUserStore();
const { getName: userName } = storeToRefs(userStore);
</script>

<style scoped lang="scss">
.home-container {
  padding: 20px;
}

.user-info {
  padding: 15px;
  margin: 20px 0;
  background-color: #e3f2fd;
  border-radius: 8px;
}

.counter {
  padding: 15px;
  margin: 20px 0;
  background-color: #f3e5f5;
  border-radius: 8px;
}

.counter-buttons {
  margin-top: 10px;

  button {
    padding: 8px 16px;
    margin-right: 10px;
    cursor: pointer;
    border: none;
    border-radius: 4px;

    &:first-child {
      color: white;
      background-color: #4caf50;
    }

    &:last-child {
      color: white;
      background-color: #f44336;
    }
  }
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #495057;
}
</style>
