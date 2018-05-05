import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(Router)

import city from "../components/city"
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component:HomePage
    },
    {
      path:'/city/:id',
      name:"city",
      component:city
    }
  ]
})
