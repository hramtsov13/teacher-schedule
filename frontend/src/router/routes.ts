import { RouteRecordRaw } from 'vue-router'
import { RouteComponent } from 'vue-router'

const MainLayout = (): RouteComponent => import('../layouts/MainLayout.vue')

const HomeView = (): RouteComponent => import('../views/HomeView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'HomeView',
        component: HomeView
      }
    ]
  }
]

export default routes
