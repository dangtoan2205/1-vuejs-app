import { createRouter, createWebHistory } from 'vue-router';
import admin from './admin';  //module admin trong router/admin.js

const routes = [...admin];   //hậu tố lấy hết các tham số

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
