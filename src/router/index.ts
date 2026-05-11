import { h, markRaw } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import setupGuards from './guards';

import type { RouteRecordRaw } from 'vue-router';

import CoreSvg from '@/components/CoreSvg/index.vue';
import { $t } from '@/locales';

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
          title: $t('menu.workspace'),
          icon: 'icon-workbench',
        },
      },
      {
        path: '/theme-editor',
        component: () => import('@/views/theme-editor/index.vue'),
        meta: {
          title: $t('menu.themeEditor'),
          icon: '#svg-layout-css',
          activeIcon: '#svg-layout-active-css',
        },
      },
      {
        path: '/demos',
        meta: {
          title: $t('menu.demos'),
          icon: markRaw(h(CoreSvg, { name: 'layout-demo' })),
        },
        children: [
          {
            path: '/demos/badge',
            meta: {
              title: $t('menu.menuBadge'),
              icon: '#svg-layout-bullseye',
            },
            children: [
              {
                path: '/demos/badge/dot',
                component: () => import('@/views/demos/badge/dot/index.vue'),
                meta: {
                  title: $t('menu.dotBadge'),
                  icon: '#svg-layout-crosshair',
                },
              },
              {
                path: '/demos/badge/text',
                component: () => import('@/views/demos/badge/text/index.vue'),
                meta: {
                  title: $t('menu.textBadge'),
                  icon: '#svg-layout-crosshair',
                },
              },
              {
                path: '/demos/badge/color',
                component: () => import('@/views/demos/badge/color/index.vue'),
                meta: {
                  title: $t('menu.colorBadge'),
                  icon: '#svg-layout-crosshair',
                },
              },
            ],
          },
          {
            path: '/demos/outside',
            meta: {
              title: $t('menu.external'),
              icon: '#svg-layout-external',
            },
            children: [
              {
                path: '/demos/outside/inline',
                meta: {
                  title: $t('menu.inline'),
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
                      openInNewWindow: true,
                    },
                  },
                ],
              },
              {
                path: '/demos/outside/link',
                meta: {
                  title: $t('menu.outlink'),
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
          title: $t('menu.examples'),
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
export * from './nprogress';
