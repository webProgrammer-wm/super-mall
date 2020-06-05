import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home')
const Category = () => import('../views/Category/Category')
const Cart = () => import('../views/Cart/Cart')
const Profile = () => import('../views/Profile/Profile')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },{
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
