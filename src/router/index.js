import { createRouter, createWebHistory } from 'vue-router';
import Main from '../component/header.vue'; // Исправленный путь
import Cont from '../component/cont.vue'; // Исправленный путь

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/cont',
    name: 'Cont',
    component: Cont
  },
];

const router = create ⬤