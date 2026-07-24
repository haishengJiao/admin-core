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
            name: 'FeaturesDemos',
            path: '/demos/features',
            meta: {
              title: $t('menu.features'),
              icon: '#svg-layout-features',
            },
            children: [
              {
                name: 'WatermarkDemo',
                path: '/demos/features/watermark',
                component: () => import('@/views/demos/features/watermark/index.vue'),
                meta: {
                  title: $t('menu.watermark'),
                  icon: '#svg-layout-watermark',
                },
              },
            ],
          },
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
                    name: 'TypeScriptDemo',
                    path: '/demos/outside/inline/TypeScript',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'TypeScript',
                      icon: 'https://www.typescriptlang.org/favicon-32x32.png',
                      iframeSrc: 'https://www.typescriptlang.org/docs/',
                    },
                  },
                  {
                    name: 'VueI18nDemo',
                    path: '/demos/outside/inline/VueI18n',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'Vue I18n',
                      icon: 'https://vue-i18n.intlify.dev/vue-i18n-logo.svg',
                      iframeSrc: 'https://vue-i18n.intlify.dev/guide/introduction.html',
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
                  {
                    name: 'ElementPlusDemo',
                    path: '/demos/outside/link/ElementPlus',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'Element Plus',
                      icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
                      link: 'https://element-plus.org/zh-CN/',
                    },
                  },
                  {
                    name: 'VueUseDemo',
                    path: '/demos/outside/link/VueUse',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'VueUse',
                      icon: 'https://vueuse.org/favicon.svg',
                      link: 'https://vueuse.org/',
                    },
                  },
                  {
                    name: 'PiniaDemo',
                    path: '/demos/outside/link/Pinia',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'Pinia',
                      icon: 'https://pinia.vuejs.org/logo.svg',
                      link: 'https://pinia.vuejs.org/zh/',
                    },
                  },
                  {
                    name: 'VueRouterDemo',
                    path: '/demos/outside/link/VueRouter',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'Vue Router',
                      icon: 'https://router.vuejs.org/logo.svg',
                      link: 'https://router.vuejs.org/zh/',
                    },
                  },
                  {
                    name: 'ViteDemo',
                    path: '/demos/outside/link/vite',
                    component: () => import('@/views/layout/iframe/index.vue'),
                    meta: {
                      title: 'vite',
                      icon: 'https://v7.vite.dev/logo-without-border.svg',
                      link: 'https://v7.vite.dev/',
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
