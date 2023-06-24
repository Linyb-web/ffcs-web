/**
 * @Author: Linyb
 * @Date: 2023-06-24 15:38:48
 * @Description: 路由配置
 * path: '/about',
 * name: 'about',
 * component: () => import('../views/AboutView.vue')
 */

import { RouteRecordRaw } from 'vue-router'
import config from '@/config/params'

const pathParams: Array<RouteRecordRaw> = [
  {
    path: '/welcome',
    name: 'welcome',
    meta: {
      title: "欢迎"
    },
    component: () => import('@/layout/welcome.vue')
  },
  {
    path: '/basic',
    name: 'basic',
    meta: { icon: null, title: "基础介绍" },
    // redirect: config.DASHBOARD_URL || '/dashboard',
    // component: null,
    component: () => import('@/views/Basic/index.vue'),
    children: [
      {
        path: '/basic/html',
        name: 'html',
        meta: { icon: null, title: "基础介绍-HTML" },
        component: () => import('@/views/Basic/index.vue')
      }
    ]
  }
]

export default pathParams