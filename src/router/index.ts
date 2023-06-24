import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pathParams from './pathParams'
import config from '../config/params'
const routes:any = pathParams;
// const routes: Array<RouteRecordRaw> = 
//   [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import('../views/AboutView.vue')
//   }
// ]
//设置标题
document.title = config.APP_NAME;

const router:Router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: routes
})


export default router
