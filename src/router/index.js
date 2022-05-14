import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '../components/Notes/ViewNotes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewNotes
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('../components/Stats/ViewStats.vue')
    },
    {
      path: '/editNote/:id',
      name: 'edit-note',
      component: () => import('../components/Notes/EditNote.vue'),
      beforeEnter:(to,from,next)=>{
        console.log('from',from)
        !from.name?next('/'):next()
      }
    }
  ]
})

export default router
