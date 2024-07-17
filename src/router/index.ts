import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddTask from '@/components/AddTask.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddTask },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
