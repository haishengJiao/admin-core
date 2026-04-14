<template>
  <ColorPickerItem v-model="success" :predefine="successPredefine">成功色</ColorPickerItem>
  <ColorPickerItem v-model="warning" :predefine="warningPredefine">警告色</ColorPickerItem>
  <ColorPickerItem v-model="danger" :predefine="dangerPredefine">危险色</ColorPickerItem>
  <ColorPickerItem v-model="error" :predefine="errorPredefine">错误色</ColorPickerItem>
  <ColorPickerItem v-model="info" :predefine="infoPredefine">信息色</ColorPickerItem>
</template>

<script lang="ts" setup>
import ColorPickerItem from '../../ColorPickerItem.vue';

const success = defineModel<string>('success');
const warning = defineModel<string>('warning');
const danger = defineModel<string>('danger');
const error = defineModel<string>('error');
const info = defineModel<string>('info');

const successPredefine = ['#76cb4f', '#85d464', '#94dd79', '#5bb930', '#4fb026', '#43a71c', '#70c747', '#5eb835'];
const warningPredefine = ['#e9af56', '#ecbb70', '#efb98a', '#d99432', '#cc8629', '#bf7920', '#e3a950', '#dda743'];
const dangerPredefine = ['#f77f7f', '#f99292', '#fb8585', '#f85c5c', '#e85151', '#d94747', '#f28282', '#ed6868'];
const errorPredefine = ['#f77f7f', '#f99292', '#fb8585', '#f85c5c', '#e85151', '#d94747', '#f28282', '#ed6868'];
const infoPredefine = ['#a2a4ab', '#b2b4ba', '#c1c3c8', '#82848a', '#74767b', '#65676c', '#9a9ca2', '#8a8c92'];
</script>
