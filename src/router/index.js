import home from '../components/home.vue'
import about from '../components/about.vue'
import VueRouter  from 'vue-router'

export default new VueRouter({
    routes: [
        {
            path:'/home',
            component: home
        },
        {
            name: 'about',
            path:'/about',
            component: about
        }
    ]
})