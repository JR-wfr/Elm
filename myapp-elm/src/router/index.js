//获取组件
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Personal from '../components/User/personal'

import Order1 from "../components/order"
import Integral from '@/components/integral'
import VIP from "../components/VIP/VIP"
import Service from "../components/service/service"
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Search from "../components/ElmShop/search"

import Compt from "../components/ElmShop/compt"
import VagName from "../components/ElmShop/vagName"
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(Router)

import city from "../components/city"
import Businesstore from "../components/ElmShop/businesstore"
import Login from '@/components/login'
import Shop from "../components/ElmShop/shop"
import FoodDetails from "../components/ElmShop/fooddetails"
import service from "../components/service/service"
//服务中心的路由
import One from "../components/Service Centre/one"
import Two from "../components/Service Centre/two"
import Three from "../components/Service Centre/three"
import Four from "../components/Service Centre/four"
import Five from "../components/Service Centre/five"
import Six from "../components/Service Centre/six"
import Seven from "../components/Service Centre/seven"
import Eight from "../components/Service Centre/eight"
import Nine from "../components/Service Centre/nine"
import Ten from "../components/Service Centre/ten"
import Eleven from "../components/Service Centre/eleven"
import Twelve from "../components/Service Centre/twelve"
import Thirteen from "../components/Service Centre/thirteen"
import Fourteen from "../components/Service Centre/fourteen"
import Fifteen from "../components/Service Centre/fifteen"

import Sixteen from "../components/Service Centre/sixteen"
import Seventeen from "../components/Service Centre/seventeen"
import Eighteen from "../components/Service Centre/eighteen"
import Nineteen from "../components/Service Centre/nineteen"
import Twenty from "../components/Service Centre/twenty-one"
import Twenty1 from "../components/Service Centre/twenty"

//boxes
import Balance from "../components/boxes/balance"
import Explain from "../components/boxes/explain"
import Discount from "../components/boxes/discount"
import Hbsm from "../components/boxes/hbsm"
import Exchange from "../components/boxes/exchange"


Vue.use(Router)
//配置路由

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/city/:id',
      name: "city",
      component: city

    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "/store",
      name: "Businesstore",
      component: Businesstore
    },
    {
      path: "/details",
      name: "FoodDetails",
      component: FoodDetails
    },
    {
      path: "/integral",
      name: "Integral",
      component: Integral
    },{
      path:"/VIP",
      name:"VIP",
      component:VIP
    }, {
      path: "/service",
      name: "Service",
      component: Service
    },
    {
      path: "/jump",
      name: "Compt",
      component: Compt,
      children: [
        {
          path: "shop",
          name: "Shop",
          component: Shop
        },
        {
          path: "serach",
          name: "Search",
          component: Search
        },
        {
          path: "order",
          name: "Order1",
          component: Order1
        },
        {
          path: 'personal',
          name: 'Personal',
          component: Personal

        },
        {
          path:"/vagName",
          name:"VagName",
          component:VagName
        }
      ]
    },
    {
      path: "/one",
      name: "One",
      component: One
    }, {
      path: "/two",
      name: "Two",
      component: Two
    }, {
      path: "/three",
      name: "Three",
      component: Three
    }, {
      path: "/four",
      name: "Four",
      component: Four
    }, {
      path: "/five",
      name: "Five",
      component: Five
    }, {
      path: "/six",
      name: "Six",
      component: Six
    }, {
      path: "/seven",
      name: "Seven",
      component: Seven
    }, {
      path: "/eight",
      name: "Eight",
      component: Eight
    }, {
      path: "/nine",
      name: "Nine",
      component: Nine
    }, {
      path: "/ten",
      name: "Ten",
      component: Ten
    }, {
      path: "/eleven",
      name: "Eleven",
      component: Eleven
    }, {
      path: "/twelve",
      name: "Twelve",
      component: Twelve
    }, {
      path: "/thirteen",
      name: "Thirteen",
      component: Thirteen
    },
    {
      path: "/fifteen",
      name: "Fifteen",
      component: Fifteen
    },
    {
      path: "/fourteen",
      name: "Fourteen",
      component: Fourteen
    },
    {
      path: "/sixteen",
      name: "Sixteen",
      component: Sixteen
    },
    {
      path: "/seventeen",
      name: "Seventeen",
      component: Seventeen
    }, {
      path: "/eighteen",
      name: "Eighteen",
      component: Eighteen
    },
    {
      path:"/nineteen",
      name:"Nineteen",
      component:Nineteen
    },
    {
      path:"/twenty-one",
      name:"Twenty",
      component:Twenty
    },
    {
      path:"/twenty",
      name:"Twenty1",
      component:Twenty1
    },
    {
      path:"/balance",
      name:"Balance",
      component:Balance
    },
    {
      path:"/explain",
      name:"Explain",
      component:Explain
    },{
    path:"/discount",
      name:"Discount",
      component:Discount
    },
    {
      path:"/hbsm",
      name:"Hbsm",
      component:Hbsm
    },
    {
      path:"/exchange",
      name:"Exchange",
      component:Exchange
    }


  ]
})
