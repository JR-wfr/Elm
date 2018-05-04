//获取组件
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Login from '@/components/login'

Vue.use(Router)

//配置路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },{

      path: '/login',
      name: 'login',
      component: Login

    }
  ]
})
