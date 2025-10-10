// 工具函数示例文件

import { ref } from 'vue'

import type { Ref } from 'vue'

/**
 * 用户接口定义
 */
export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
  createdAt: Date
  updatedAt: Date
}

/**
 * API 响应接口
 */
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data: T
  code: number
}

/**
 * 分页参数接口
 */
export interface PaginationParams {
  page: number
  pageSize: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

/**
 * 格式化日期
 * @param date - 要格式化的日期
 * @param format - 格式字符串
 * @returns 格式化后的日期字符串
 */
export function formatDate(date: Date | string, format = 'YYYY-MM-DD'): string {
  const d = new Date(date)

  if (Number.isNaN(d.getTime())) {
    throw new Error('Invalid date provided')
  }

  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

/**
 * 防抖函数
 * @param func - 要防抖的函数
 * @param delay - 延迟时间（毫秒）
 * @returns 防抖后的函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: number | null = null

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

/**
 * 节流函数
 * @param func - 要节流的函数
 * @param delay - 延迟时间（毫秒）
 * @returns 节流后的函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastCallTime = 0

  return (...args: Parameters<T>) => {
    const now = Date.now()

    if (now - lastCallTime >= delay) {
      lastCallTime = now
      func(...args)
    }
  }
}

/**
 * 深拷贝函数
 * @param obj - 要拷贝的对象
 * @returns 深拷贝后的对象
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T
  }

  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as T
  }

  if (typeof obj === 'object') {
    const clonedObj = {} as T

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }

    return clonedObj
  }

  return obj
}

/**
 * 获取随机字符串
 * @param length - 字符串长度
 * @returns 随机字符串
 */
export function generateRandomString(length = 8): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return result
}

/**
 * 验证邮箱格式
 * @param email - 邮箱地址
 * @returns 是否为有效邮箱
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * 本地存储工具类
 */
export class LocalStorageUtils {
  /**
   * 设置本地存储
   * @param key - 键名
   * @param value - 值
   */
  static setItem<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error('Failed to set localStorage item:', error)
    }
  }

  /**
   * 获取本地存储
   * @param key - 键名
   * @param defaultValue - 默认值
   * @returns 存储的值或默认值
   */
  static getItem<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key)

      if (item === null) {
        return defaultValue
      }

      return JSON.parse(item) as T
    } catch (error) {
      console.error('Failed to get localStorage item:', error)
      return defaultValue
    }
  }

  /**
   * 删除本地存储
   * @param key - 键名
   */
  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Failed to remove localStorage item:', error)
    }
  }

  /**
   * 清空本地存储
   */
  static clear(): void {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Failed to clear localStorage:', error)
    }
  }
}

/**
 * 请求工具函数
 * @param url - 请求地址
 * @param options - 请求选项
 * @returns Promise<ApiResponse>
 */
export async function request<T = any>(
  url: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  const defaultOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const mergedOptions = { ...defaultOptions, ...options }

  try {
    const response = await fetch(url, mergedOptions)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Request failed')
    }

    return {
      success: true,
      message: 'Request successful',
      data,
      code: response.status,
    }
  } catch (error) {
    console.error('Request failed:', error)

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
      data: {} as T,
      code: 500,
    }
  }
}

/**
 * Vue 组合式函数：管理加载状态
 * @param initialValue - 初始加载状态
 * @returns 加载状态和控制函数
 */
export function useLoading(initialValue = false) {
  const loading: Ref<boolean> = ref(initialValue)

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  const withLoading = async <T>(asyncFn: () => Promise<T>): Promise<T> => {
    setLoading(true)

    try {
      const result = await asyncFn()
      return result
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    setLoading,
    withLoading,
  }
}

// 常量定义
export const APP_CONFIG = {
  NAME: 'Admin Core',
  VERSION: '1.0.0',
  AUTHOR: 'Admin Team',
  DEFAULT_PAGE_SIZE: 20,
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  SUPPORTED_FILE_TYPES: ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx'],
} as const

// 导出默认配置
export default {
  formatDate,
  debounce,
  throttle,
  deepClone,
  generateRandomString,
  validateEmail,
  LocalStorageUtils,
  request,
  useLoading,
  APP_CONFIG,
}