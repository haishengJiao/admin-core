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
          activeIcon: '#svg-layout-active-css',
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
                meta: {
                  title: '内嵌',
                  icon: '#svg-layout-frame',
                },
                children: [
                  {
                    path: '/demos/outside/inline/VueUse',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'VueUse',
                      icon: 'https://vueuse.org/favicon.svg',
                      iframeSrc: 'https://vueuse.org/',
                    },
                  },
                  {
                    path: '/demos/outside/inline/vite',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'vite',
                      icon: 'https://v7.vite.dev/logo-without-border.svg',
                      iframeSrc: 'https://v7.vite.dev/',
                    },
                  },
                ],
              },
              {
                path: '/demos/outside/link',
                meta: {
                  title: '外链',
                  icon: '#svg-layout-link',
                },
                children: [
                  {
                    path: '/demos/outside/link/vue',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'Vue',
                      icon: 'https://cn.vuejs.org/logo.svg',
                      link: 'https://cn.vuejs.org/',
                    },
                  },
                  {
                    path: '/demos/outside/link/tailwindcss',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'Tailwind CSS',
                      icon: 'https://tailwindcss.com/favicons/favicon.ico?v=4',
                      link: 'https://tailwindcss.com/',
                    },
                  },
                ],
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
