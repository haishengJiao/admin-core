import { h, markRaw } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import setupGuards from './guards';

import type { RouteRecordRaw } from 'vue-router';

import CoreSvg from '@/components/CoreSvg/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/workplace',
    children: [
      {
        path: '/workplace',
        component: () => import('@/views/workplace/index.vue'),
        meta: {
          title: '工作台',
          icon: 'icon-workbench',
        },
      },
      {
        path: '/theme-editor',
        component: () => import('@/views/theme-editor/index.vue'),
        meta: {
          title: '主题编辑器',
          icon: '#svg-layout-css',
        },
      },
      {
        path: '/demos',
        meta: {
          title: '演示',
          icon: markRaw(h(CoreSvg, { name: 'layout-demo' })),
        },
        children: [
          {
            path: '/demos/badge',
            meta: {
              title: '菜单徽标',
              icon: '#svg-layout-bullseye',
            },
            children: [
              {
                path: '/demos/badge/dot',
                component: () => import('@/views/demos/badge/dot/index.vue'),
                meta: {
                  title: '点徽标',
                  icon: '#svg-layout-crosshair',
                },
              },
              {
                path: '/demos/badge/text',
                component: () => import('@/views/demos/badge/text/index.vue'),
                meta: {
                  title: '文本徽标',
                  icon: '#svg-layout-crosshair',
                },
              },
              {
                path: '/demos/badge/color',
                component: () => import('@/views/demos/badge/color/index.vue'),
                meta: {
                  title: '颜色徽标',
                  icon: '#svg-layout-crosshair',
                },
              },
            ],
          },
          {
            path: '/demos/outside',
            meta: {
              title: '外部页面',
              icon: '#svg-layout-external',
            },
            children: [
              {
                path: '/demos/outside/inline',
                component: () => import('@/views/demos/outside/inline/index.vue'),
                meta: {
                  title: '内嵌',
                  icon: '#svg-layout-frame',
                },
              },
              {
                path: '/demos/outside/link',
                component: () => import('@/views/demos/outside/link/index.vue'),
                meta: {
                  title: '外链',
                  icon: '#svg-layout-link',
                },
              },
            ],
          },
        ],
      },
      {
        path: '/examples',
        meta: {
          title: '示例',
          icon: '#svg-layout-example',
        },
        children: [
          {
            path: '/examples/button',
            component: () => import('@/views/examples/button/index.vue'),
            meta: {
              title: '按钮',
            },
          },
          {
            path: '/examples/input',
            component: () => import('@/views/examples/input/index.vue'),
            meta: {
              title: '输入框',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/layout/404/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

setupGuards(router);

export default router;
