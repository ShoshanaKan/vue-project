import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginForm from '@/views/LoginForm.vue';
import DepositForm from '@/views/DepositForm.vue';
import { useStore } from 'vuex';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: DepositForm,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = to.matched.some(record => record.meta.requiresAuth)

  // Check if the route requires authentication
  if (isAuthenticated) {
    const store = useStore()
    const authenticated = store.state.isAuthenticated

    if (!authenticated) {
      next('/login')
    }
  }

  next()
})

export default router;