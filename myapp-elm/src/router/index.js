//获取组件
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
<<<<<<< HEAD
import hotCity from "../components/hotCity"
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(Router)

import city from "../components/city"
=======
import Login from '@/components/login'

Vue.use(Router)

//配置路由
>>>>>>> feature/ttx
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
<<<<<<< HEAD
      component:HomePage
    },
    {
      path:'/city/:id',
      name:"city",
      component:city
    },
    {
      path:"/hotCity",
      name:"hotCity",
      component:hotCity
=======
      component: HomePage
    },{

      path: '/login',
      name: 'login',
      component: Login

>>>>>>> feature/ttx
    }
  ]
})
