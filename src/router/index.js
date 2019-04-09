import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 主页（登陆页
import users from '../users/user.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(ElementUI)

const routers = [
  {
    name: 'users',
    path: '/users',
    component: users
  },
  {
    path: '/',
    component: users
  }
]

export default routers
