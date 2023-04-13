import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/deploying-vite-project-example/',
            component: Home,
        },
        {
            path: '/deploying-vite-project-example/about',
            component: About
        }
    ]
})

export default router