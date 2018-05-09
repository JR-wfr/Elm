//获取组件
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import  Personal from '../components/User/personal'

import Order1 from "../components/order"
import  Integral from'@/components/integral'
import VIP from"../components/VIP/VIP"
import  Service from "../components/service/service"
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Search from "../components/ElmShop/search"

import Compt from "../components/ElmShop/compt"

Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(Router)

import city from "../components/city"
import Businesstore from "../components/ElmShop/businesstore"
import Login from '@/components/login'
import Shop from "../components/ElmShop/shop"
import FoodDetails from "../components/ElmShop/fooddetails"
Vue.use(Router)
//配置路由

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

    }, {

      path: '/login',
      name: 'login',
      component: Login
    }
    ,
    {
      path:"/store",
      name:"Businesstore",
      component:Businesstore
    },
    {
      path:"/details",
      name:"FoodDetails",
      component:FoodDetails
    },
    {
      path:"/integral",
      name:Integral,
      component:Integral
    },{
      path:"/VIP",
      name:VIP,
      component:VIP
    },{
    path:"/service",
      name:Service,
      component:Service
    },
    {
      path:"/jump",
      name:"Compt",
      component:Compt,
      children:[
        {
          path:"shop",
          name:"Shop",
          component:Shop
        },
        {
          path:"serach",
          name:"Search",
          component:Search
        },
        {
          path:"order",
          name:"Order1",
          component:Order1
        },
        {
          path: 'personal',
          name: 'Personal',
          component: Personal

        }
      ]
    }
  ]
})
