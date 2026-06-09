import { h, markRaw } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import setupGuards from './guards';

import type { RouteRecordRaw } from 'vue-router';

import CoreSvg from '@/components/CoreSvg/index.vue';
import { $t } from '@/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'Root',
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/workplace',
    children: [
      {
        name: 'Workplace',
        path: '/workplace',
        component: () => import('@/views/workplace/index.vue'),
        meta: {
          title: $t('menu.workspace'),
          icon: 'icon-workbench',
        },
      },
      {
        name: 'ThemeEditor',
        path: '/theme-editor',
        component: () => import('@/views/theme-editor/index.vue'),
        meta: {
          title: $t('menu.themeEditor'),
          icon: '#svg-layout-css',
          activeIcon: '#svg-layout-active-css',
          selfScroll: true,
        },
      },
      {
        name: 'Demos',
        path: '/demos',
        meta: {
          title: $t('menu.demos'),
          icon: markRaw(h(CoreSvg, { name: 'layout-demo' })),
        },
        children: [
          {
            name: 'BadgeDemos',
            path: '/demos/badge',
            meta: {
              title: $t('menu.menuBadge'),
              icon: '#svg-layout-bullseye',
            },
            children: [
              {
                name: 'BadgeDotDemo',
                path: '/demos/badge/dot',
                component: () => import('@/views/demos/badge/dot/index.vue'),
                meta: {
                  title: $t('menu.dotBadge'),
                  icon: '#svg-layout-crosshair',
                },
              },
              {
                name: 'BadgeTextDemo',
                path: '/demos/badge/text',
                component: () => import('@/views/demos/badge/text/index.vue'),
                meta: {
                  title: $t('menu.textBadge'),
                  icon: '#svg-layout-crosshair',
                },
              },
              {
                name: 'BadgeColorDemo',
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
            name: 'OutsideDemos',
            path: '/demos/outside',
            meta: {
              title: $t('menu.external'),
              icon: '#svg-layout-external',
            },
            children: [
              {
                name: 'InlineDemos',
                path: '/demos/outside/inline',
                meta: {
                  title: $t('menu.inline'),
                  icon: '#svg-layout-frame',
                },
                children: [
                  {
                    name: 'VueUseDemo',
                    path: '/demos/outside/inline/VueUse',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'VueUse',
                      icon: 'https://vueuse.org/favicon.svg',
                      iframeSrc: 'https://vueuse.org/',
                    },
                  },
                  {
                    name: 'ViteDemo',
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
                name: 'LinkDemos',
                path: '/demos/outside/link',
                meta: {
                  title: $t('menu.outlink'),
                  icon: '#svg-layout-link',
                },
                children: [
                  {
                    name: 'VueDocumentDemo',
                    path: '/demos/outside/link/vue',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'Vue',
                      icon: 'https://cn.vuejs.org/logo.svg',
                      link: 'https://cn.vuejs.org/',
                    },
                  },
                  {
                    name: 'TailwindcssDemo',
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
        name: 'Examples',
        path: '/examples',
        meta: {
          title: $t('menu.examples'),
          icon: '#svg-layout-example',
        },
        children: [
          {
            name: 'Button',
            path: '/examples/button',
            component: () => import('@/views/examples/button/index.vue'),
            meta: {
              title: '按钮',
            },
          },
          {
            name: 'Input',
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
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    name: 'NotFound',
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
