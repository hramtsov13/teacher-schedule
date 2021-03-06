import { RouteRecordRaw, RouteComponent } from 'vue-router'

const MainLayout = (): RouteComponent => import('../layouts/MainLayout.vue')

const HomeView = (): RouteComponent => import('../views/HomeView.vue')
const StudentView = (): RouteComponent => import('../views/StudentView.vue')
const NewStudentView = (): RouteComponent => import('../views/NewStudentView.vue')

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
      },
      {
        path: '/student/:id',
        name: 'StudentView',
        component: StudentView
      },
      {
        path: '/new-student',
        name: 'NewStudentView',
        component: NewStudentView
      }
    ]
  }
]

export default routes
