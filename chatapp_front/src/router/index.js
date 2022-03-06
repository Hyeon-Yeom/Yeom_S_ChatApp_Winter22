import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Greeting from '../components/Greeting.vue';

const routes = [
  {
    path: '/',
    name: 'Greeting',
    component: Greeting
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (chat.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "chat" */ '../views/Chat.vue'),
    props: true
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router