<template>
  <div class="body2">
    <div class="wfr-info-logo" :style="'background: url('+imgurl1+wfrData.image_path+') 0% 0% / cover no-repeat'">
      <div class="wfr-stroe-infor">
        <img :src="imgurl1+wfrData.image_path" class="wfr-stroe-infor-img">
        <div class="wfr-info-name">
          <span>{{wfrData.name}}</span>
          <span class="wfr-logo-back" @click="goback">返回</span>
          <p class="wfr-info-name-p1">商家配送／分钟送达／配送费¥5</p>
          <p class="wfr-info-name-p2">{{wfrData.promotion_info}}</p>
        </div>
        <div class="wfr-info-logo-activity">
          <div>
            <span class="tip_icon"
                  style="background-color: rgb(240, 115, 115); border-color: rgb(240, 115, 115);">减</span>
            <span>满30减5，满60减8（APP专享）</span>
          </div>
          <div class="tip_icon2">
            <router-link :to="{}">
              <span class="tip_icon2-span">1个活动</span>
              <svg class="footer_arrow">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left">
                  <svg viewBox="0 0 14 14" id="arrow-left" width="100%" height="100%">
                    <path d="M0 0 L8 7 L0 14" stroke="#fff" stroke-width="1" fill="none"></path>
                  </svg>
                </use>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="wfr-wares">
      <div class="wfr-ware-left" @click="Appearclick">
        <span :class="{wfrWareSpan1:appear}">商品</span>
      </div>
      <div class="wfr-evaluate-right" @click="Appearclick1">
        <span :class="{wfrWareSpan2:appear1}">评价</span>
      </div>
    </div>
    <div v-if="wfrend">
      <div class="wang-float">
        <ul class="wfr-foods-ul">
          <div class="foods-father">
            <div class="foods-top">
              <li v-for="(Arr10,index) in arr10" :class="{wangtt:or==index}" class="wfr-foods-type"
                  @click="wangtype(index,$event)">
                <img :src="Arr10.icon_url" v-if="Arr10.icon_url != '' "/>
                <span>{{Arr10.name}}</span>
              </li>
            </div>
          </div>
        </ul>
        <ul class="wang-ul">
          <div class="wfr-nn-position">
            <div v-for="arr9 in arr10" class="wang-list">
              <p class="wang-foods-name">
                <span class="wang-foods-span2">{{arr9.name}}</span>
                <span class="wang-foods-span3">{{arr9.description}}</span>
                <span class="wang-foods-span4">...</span>
              </p>
              <li v-for="(array1,index) in arr9.foods" class="wang-list-name">
                <div class="nnbgcolor" v-if="array1.specfoods.length>=3" @click="dianji"></div>
                <div class="wang-nn-float">
                  <div class="wang-nn-left">
                    <span class="wfr-new-product" style="background: rgb(94, 196, 82); border-color: rgb(94, 196, 82);"
                          v-if="array1.attributes.length>=1">新品</span>
                    <img :src="imgur +array1.image_path" class="wfr-image"/>
                  </div>
                  <div class="wang-nn-right">
                    <p class="wang-list-span">{{array1.name}}</p>
                    <p class="wang-nn-p1">
                      {{array1.description}}
                    </p>
                    <div class="wfr-nn-div">
                      <span class="wfr-nn-span1">月售{{array1.month_sales}}</span>
                      <span class="wfr-nn-span1">好评率{{array1.satisfy_rate}}%</span>
                    </div>
                    <span v-if="array1.activity" class="wfr-nn-span">{{array1.activity.image_text}}</span>
                    <div class="wfr-money-div">
                      <p class="wfr-nn-money">
                        ¥{{array1.specfoods[0].price}}
                        <span class="wfr-money-span">起</span>
                      </p>
                      <div class="wfr-nn-add">
                        <span class="wfr-Specifications" v-if="array1.specfoods.length>=3"
                              @click="wfrmask(array1.name,index,array1.specfoods,array1)">选规格
                        </span>
                        <div @click="wfrmask1(array1,array1.name,index)" class="wfr-nn-add1"
                             v-if="array1.specfoods.length<3">
                          <div class="wfr-jia">+</div>
                        </div>
                        <span v-if="array1.count != 0" class="wfr-nn-ff" v-show="ttt">
                            <span class="wfr-ff-span1" @click="wfrcli(array1,index)">-</span>
                            <span class="wfr-ff-span2">{{array1.count}}</span>
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </ul>
        <div>
        </div>
        <div v-show="mask2">
          <div class="sdbsad"></div>
          <div class="mask-content">
            <h3 class="wfr-shopname">{{shopname}}
              <span class="wfrDelete" @click="delete1">x</span>
            </h3>
            <div class="wfr-norms">规格</div>
            <ul class="wfr-nn-txt">
              <li v-for="(foodname,index) in this.suzhu2" :class="{foodcolor:or1 ==index}" class="wfr-nn-text"
                  @click="nnclick(index,foodname.price,foodname.specs_name)">
                <div class="wfr-nn-text-div">{{foodname.specs_name}}</div>
              </li>
            </ul>
            <div class="wfr-norms1">
              <div class="wfr-norms1-left">
                <span class="wfr-norms1-span1">¥</span>
                <span class="wfr-norms1-span2" v-if="nnn">
                 {{numbre1}}
               </span>
                <span class="wfr-norms1-span2" v-else>{{RMB}}</span>
              </div>
              <div class="wfr-norms1-right">
                <span class="wfr-norms1-span3" @click="NNcl(array4,namess)">加入购物车</span>
              </div>
            </div>
          </div>
        </div>
        <div class="wfr-foods-footer">
					<span v-show="bg" class="wfr-foods-span1">
						<span class="wfr-foods-svg">
							<svg t="1526301185248" class="icon" style="margin-top: 0.08rem;margin-left: 0.05rem"
                   viewBox="0 0 1187 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2102"
                   xmlns:xlink="http://www.w3.org/1999/xlink" width="148.375" height="128"><path
                d="M406.736182 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z"
                fill="#ffffff" p-id="2103"></path><path
                d="M1015.373632 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z"
                fill="#ffffff" p-id="2104"></path><path
                d="M620.370371 811.832407H404.291855a160.836724 160.836724 0 0 1-141.770973-146.659626c0-2.933193-48.886542-345.627853-64.530235-491.309749a132.971395 132.971395 0 0 0-38.620369-91.417834 48.886542 48.886542 0 0 0-28.84306-9.777309H36.176192A35.687176 35.687176 0 1 1 36.176192 0.315807h86.040314a116.34997 116.34997 0 0 1 79.685064 23.954406 195.546169 195.546169 0 0 1 66.485697 140.304376c17.599155 146.659626 64.04137 488.865422 64.530236 488.865421S342.694811 733.61394 408.691643 738.991459c74.307544 4.399789 677.567474 0 684.411591 0a34.709445 34.709445 0 0 1 35.687175 35.198311 35.687176 35.687176 0 0 1-35.19831 35.687175c-17.599155 0-275.720098 1.955462-473.221728 1.955462z"
                fill="#ffffff" p-id="2105"></path><path
                d="M289.897346 602.109141S782.673691 594.77616 920.53374 586.954313 1075.992944 504.824922 1075.992944 504.824922s56.708389-217.545113 72.840948-301.1411C1171.321701 80.489736 1062.304712 98.088891 1062.304712 98.088891H227.811437z"
                fill="#ffffff" p-id="2106"></path><path
                d="M258.609959 635.840855L187.724473 62.401716h872.135912a120.749759 120.749759 0 0 1 97.773084 30.309656 126.616144 126.616144 0 0 1 24.443271 117.816566c-16.132559 83.595987-70.885486 293.319253-73.329813 303.096562s-27.376464 97.773084-186.746591 108.039258c-136.882318 8.799578-612.059508 15.643693-632.10299 16.132559z m9.777308-504.509115l53.286331 432.157033c111.461316 0 482.021306-7.821847 596.90468-15.154828 105.594931-6.844116 121.72749-53.286331 122.216356-55.241793S1097.014157 278.480232 1112.65785 195.861976a65.996832 65.996832 0 0 0-5.377519-54.752928 52.3086 52.3086 0 0 0-39.109234-9.288443H267.898402z"
                fill="#ffffff" p-id="2107"></path></svg>
						</span>
					</span>
          <span v-show="bg1" class="wfrBGcolor" @click="updown">
						<span class="wfr-foods-svg">
							<svg t="1526301185248" class="icon" style="margin-top: 0.08rem;margin-left: 0.05rem"
                   viewBox="0 0 1187 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2102"
                   xmlns:xlink="http://www.w3.org/1999/xlink" width="148.375" height="128"><path
                d="M406.736182 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z"
                fill="#ffffff" p-id="2103"></path><path
                d="M1015.373632 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z"
                fill="#ffffff" p-id="2104"></path><path
                d="M620.370371 811.832407H404.291855a160.836724 160.836724 0 0 1-141.770973-146.659626c0-2.933193-48.886542-345.627853-64.530235-491.309749a132.971395 132.971395 0 0 0-38.620369-91.417834 48.886542 48.886542 0 0 0-28.84306-9.777309H36.176192A35.687176 35.687176 0 1 1 36.176192 0.315807h86.040314a116.34997 116.34997 0 0 1 79.685064 23.954406 195.546169 195.546169 0 0 1 66.485697 140.304376c17.599155 146.659626 64.04137 488.865422 64.530236 488.865421S342.694811 733.61394 408.691643 738.991459c74.307544 4.399789 677.567474 0 684.411591 0a34.709445 34.709445 0 0 1 35.687175 35.198311 35.687176 35.687176 0 0 1-35.19831 35.687175c-17.599155 0-275.720098 1.955462-473.221728 1.955462z"
                fill="#ffffff" p-id="2105"></path><path
                d="M289.897346 602.109141S782.673691 594.77616 920.53374 586.954313 1075.992944 504.824922 1075.992944 504.824922s56.708389-217.545113 72.840948-301.1411C1171.321701 80.489736 1062.304712 98.088891 1062.304712 98.088891H227.811437z"
                fill="#ffffff" p-id="2106"></path><path
                d="M258.609959 635.840855L187.724473 62.401716h872.135912a120.749759 120.749759 0 0 1 97.773084 30.309656 126.616144 126.616144 0 0 1 24.443271 117.816566c-16.132559 83.595987-70.885486 293.319253-73.329813 303.096562s-27.376464 97.773084-186.746591 108.039258c-136.882318 8.799578-612.059508 15.643693-632.10299 16.132559z m9.777308-504.509115l53.286331 432.157033c111.461316 0 482.021306-7.821847 596.90468-15.154828 105.594931-6.844116 121.72749-53.286331 122.216356-55.241793S1097.014157 278.480232 1112.65785 195.861976a65.996832 65.996832 0 0 0-5.377519-54.752928 52.3086 52.3086 0 0 0-39.109234-9.288443H267.898402z"
                fill="#ffffff" p-id="2107"></path></svg>
						</span>
					</span>
          <div class="wfr-foods-float">
            <div class="wfr-foods-left">
              <p v-if="cot == 0">¥ 0.00</p>
              <p v-else>¥{{const2}}</p>
              <span class="wfr-count" v-if="cot != 0">{{cot}}</span>
              <span>配送费¥5</span>
            </div>
            <div class="wfr-foods-right" v-if="cot == 0">
              还差¥20起送
            </div>
            <div v-else class="WFRbg">
              去结算
            </div>
          </div>
        </div>
        <div class="nn-foods-rmb" v-show="nnshow">
          <div class="nnrmb">
            <div class="nnrmb-float">
              <p class="nnrmb-float-left">购物车</p>
              <p class="wfr-vv">
                <svg t="1526560635504" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2347" xmlns:xlink="http://www.w3.org/1999/xlink"
                     width="128" height="128">
                  <path
                    d="M821.344 197.248l-126.752 17.824-11.904-84.512a36.48 36.48 0 0 0-14.464-24.192c-16.416-12.384-41.376-11.072-54.688-9.152l-253.792 35.648c-46.624 6.56-60.16 30.688-57.312 51.072l11.008 78.24 0.896 6.336-76.128 10.688-50.656 7.136a32 32 0 1 0 8.928 63.36l23.552-3.328 18.176-2.528 4.224-0.608 50.752-7.136 63.936-8.992 73.088-10.272 192-26.976 192-27.008 16.032-2.24c17.504-2.432 29.696-18.624 27.232-36.128s-18.528-29.76-36.128-27.232zM398.208 454.208a32 32 0 0 1 64 0v210.496a32 32 0 0 1-64 0v-210.496z m192 0a32 32 0 0 1 64 0v210.496a32 32 0 0 1-64 0v-210.496z m-352-40.736v392.704c0 20.608 9.984 38.816 25.184 50.56 10.816 8.32 24.192 13.44 38.848 13.44h447.936a63.36 63.36 0 0 0 38.816-13.44c15.232-11.712 25.216-29.888 25.216-50.56V394.176H237.344l0.864 19.328z"
                    p-id="2348" fill="#8a8a8a"></path>
                </svg>
                <span @click="clear1">清空</span>
              </p>
            </div>
            <ul class="nn-foods-ul">
              <li v-for="(nnArr,index) in obj1" class="Shopping-Cart">
                <div v-if="nnArr.pice.length>2">
                  <div class="nncolor">
                    <div class="Shopping-Cart-div">
                      <span class="Shopping-Cart-sapn1">{{nnArr.name}}</span>
                      <div class="Shopping-Cart-div1">
                        <span class="Shopping-Cart-sapn2">¥{{nnArr.pice1}}</span>
                      </div>
                    </div>
                    <p class="Shopping-Cart-sapn3">
                      {{nnArr.shangpin}}
                    </p>
                  </div>
                  <div class="nncolor-right">
                    <span class="Shopping-Cart-d" @click="wam1(index,nnArr,$event)">-</span>
                    <span class="Shopping-Cart-count">{{nnArr.jisuan1}}</span>
                    <span class="Shopping-Cart-add">+</span>
                  </div>
                </div>
                <div v-else>
                  <div class="nncolor">
                    <div class="Shopping-Cart-div">
                      <span class="Shopping-Cart-sapn1">{{nnArr.name}}</span>
                      <div class="Shopping-Cart-div1">
                        <span class="Shopping-Cart-sapn2">¥{{nnArr.pice[0].price}}</span>
                      </div>
                    </div>
                    <p class="Shopping-Cart-sapn3">
                      {{nnArr.shangpin}}
                    </p>
                  </div>
                  <div class="nncolor-right">
                    <span class="Shopping-Cart-d" @click="wam(index,nnArr.jiage1,$event)">-</span>
                    <span class="Shopping-Cart-count">{{nnArr.jiage1}}</span>
                    <span class="Shopping-Cart-add">+</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!--顶部下的-->
        <div class="change_show_type">
          <div id="ttx_id3" :class="{ttx_choosed:ttx_show3}" @click="ttxLy">
            商品

          </div>
        </div>
        <div class="wnn" v-show="jj">
          只能在购物车中删除商品哦！
        </div>
        <div v-if="wfrend1" class="rating_container">
          <section type="2"
                   style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
          </section>
          <div>
            <header class="rating_header" style="background-color: white">
              <section class="rating_header_left">
                <p style="font-size: 1.2rem;color: #f60">4.7</p>
                <p style="font-size: .6rem;color: #666;margin-bottom: .3rem;">综合评价</p>
                <p style="font-size: .4rem;color: #999;">高于周边商家76.9%</p>
              </section>
              <!--右边部分-->
              <section class="rating_header_right">
                <p class="p1">
                  <span class="span1">服务态度</span>
                  <el-rate class="ttx_01"
                           v-model="value5"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}">
                  </el-rate>
                </p>
                <p class="p1">
                  <span class="span1">菜品评价</span>
                  <el-rate class="ttx_01"
                           v-model="value6"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}">
                  </el-rate>
                </p>
                <p class="p1">
                  <span class="span1">送达时间</span>
                  <span class="delivery_time">分钟</span>
                </p>

              </section>
            </header>
            <!--那个啥-->

            <ul class="tag_list_ul">
              <li class="tagActivity" v-for="(evaluates,index) in evaluate" @click="ttx996(index)"
                  v-bind:class="{blue:index==class1}">{{ evaluates.name }} {{ evaluates.count }}
              </li>
            </ul>

            <ul class="rating_list_ul">
              <li v-for="(evaluateList,index) in evaluateList" class="rating_list_li">
                <img class="user_avatar" src="https://fuss10.elemecdn.com/1/b5/23ca27369a0eed1ce0c3fc0a5ba8bjpeg.jpeg"
                     alt="">
                <section class="rating_list_details">
                  <header class="ttx_01">
                    <section class="username_star">
                      <p class="username">{{evaluateList.username}}</p>
                      <p>
                        <!--<section class="rating_container">-->
                        <section class="star_container">
                          {{evaluateList.rating_star}}
                          <span class="time_spent_desc">按时送达</span>
                        </section>

                        <!--</section>-->
                      </p>
                    </section>
                    <time class="rated_at">{{evaluateList.rated_at}}</time>
                  </header>
                  <ul class="food_img_ul">
                    <li class="ttx_top"><img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg"
                                             alt=""></li>
                    <li class="ttx_top"><img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg"
                                             alt=""></li>
                  </ul>
                  <ul class="food_name_ul">
                    <li class="ellipsis"> {{evaluateList.food_name}}
                    </li>
                    <li class="ellipsis">
                      {{evaluateList.food_name}}
                    </li>
                  </ul>
                </section>
              </li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import Vuex from "vuex";
  Vue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      count: 0,
      price: 0,
    },
    mutations: {
      add(state, rmb) {
        state.price += rmb;
        state.count++;
      },
      clear(state) {
        state.count = 0;
        state.price = 0;
      },
      eee(state,rmb){
        state.count--;
        state.price -= rmb;
      }
    }
  });
  export default {
    name: "businesstore",
    data() {
      return {
        value5: 3.7,
        value6: 4,
        evaluate: "",
        class1: 0,
        wfrend:true,
        wfrend1:false,
        evaluateList: "",
        username: "sss",
        image_hash: "56",
        rated_at: "das",
        food_name: "dasd",
        jiage: 1,
        namess: "",
        jj: false,
        ttt: true,
        nnhh: true,
        bg1: false,
        nnshow: false,
        cot: "",
        bg: true,
        nnn: true,
        numbre1: '',
        id222: 0,
        RMB: "",
        shopname: "",
        suzhu2: [],
        mask2: false,
        diss: [],
        or1: 0,
        or: 0,
        models: true,
        wang3: true,
        kkkk: true,
        hhh: true,
        shopid: "",
        wfrData: "",
        appear: true,
        appear1: false,
        arr10: [],
        arr123: [],
        xiabiao: "",
        suoyin: '',
        imgurl1: "//elm.cangdu.org/img/",
        imgur: "//elm.cangdu.org/img/",
        divgg: "",
        www: "",
        array4: "",
        obj1: [],
        obj2: [],
        numb: false,
        bl: true,
        const1: 1,
        const2: 0,
        wangname: "",
        jisuan: 1,
        wangid: "",
      }
    },
    created() {

      var timer = setInterval(() => {
        var a = this.bl
        if (a == false) {
          clearInterval(timer);
        }
        var ul = document.getElementsByClassName("wang-ul")[0];
        var two = document.getElementsByClassName("wang-list");
        var divs = document.getElementsByClassName("foods-top")[0];
        for (var i = 0; i < two.length; i++) {
          var x = two[i].offsetHeight;
          if (this.diss.length == 0) {
            var h = x;
          } else {
            var h = x + this.diss[i - 1];
          }
          this.diss.push(h);
          if (ul.scrollTop >= this.diss[i]) {
            this.aaa(i + 1);
            if (i >= 8) {
              divs.style.top = -536 + "px";
            }
          }
        }
      }, 20);

      this.shopid = this.$route.query.id;
      var api6 = `http://cangdu.org:8001/shopping/restaurant/${this.shopid}`
      this.axios.get(api6).then((responent) => {
        this.wfrData = responent.data;
      });
      var api13 = `http://cangdu.org:8001/shopping/v2/menu?restaurant_id=${this.shopid}`
      this.axios.get(api13).then((responent) => {
        this.arr10 = responent.data;
        var obj = {
          count: 0
        };
        this.$http.get(`http://cangdu.org:8001/ugc/v2/restaurants/1/ratings?offset=0&limit=10`).then((response) => {
          // console.log(response.data);
          this.evaluateList = response.data;
        });
        this.$http.get(`http://cangdu.org:8001/ugc/v2/restaurants/1/ratings/tags`).then((response) => {
          // console.log(response.data);
          this.evaluate = response.data;
        });
        for (var i = 0; i < this.arr10.length; i++) {
          for (var j = 0; j < this.arr10[i].foods.length; j++) {
            this.arr10[i].foods[j].count = 0;
            this.arr10[i].foods[j].choose = {};

          }
        }

        function qiegeFn(Arr) {
          let newStr = "";
          var tmp = Arr.substring(0, 1) + "/";
          newStr += tmp;
          var tmp = Arr.substring(1, 3) + "/";
          newStr += tmp;
          var tmp = Arr.substring(3, Arr.length) + ".";
          newStr += tmp;
          var href = "https://fuss10.elemecdn.com/";
          href += newStr
          if (Arr.length == 35) {
            var hz = "png";
          } else {
            var hz = "jpeg";
          }
          return href += hz;
        };
        for (var i = 0; i < this.arr10.length; i++) {
          var arrImg = this.arr10[i].icon_url;

          if (arrImg != "") {
            this.arr10[i].icon_url = qiegeFn(arrImg);
          }
        }
      });
    },
    methods: {
      aaa(index) {
        this.or = index
        var uls = document.getElementsByClassName('wfr-nn-position')[0];
        var ul1 = document.getElementsByClassName("wang-ul")[0];
        var timer = setInterval(() => {
          if (index == 1 && ul1.scrollTop == 0) {
            this.or = 0
            clearInterval(timer)
          }
        }, 20)

        var cc = document.getElementsByClassName("foods-top")[0];
        if (index < 3) {
          cc.style.top = 0;
        }
        ;
        if (index >= 4) {
          var height = 67 * index;
          cc.style.top = -(height - 67 * 4) + "px"
        }
        ;
        if (index >= 15) {
          cc.style.top = -(670 + 67) + "px";
        }
        ;

      },
      Appearclick(ev) {
        if ( this.appear1 == true) {
          this.appear = true;
          this.appear1 = false;
          this.wfrend = true;
          this.wfrend1 = false;
        }
      },
      Appearclick1(ev){
        console.log("22");
        if ( this.appear == true) {
          this.appear = false;
          this.appear1 = true;
          this.wfrend = false;
          this.wfrend1 = true;
        }

      },
      wangtype(index, $event) {
        this.numb = false
        clearInterval(window.timer3)
        this.bl = false;
        var divs = document.getElementsByClassName("wang-list")
        var laji = 0;
        for (var i = 0; i < index; i++) {
          laji += divs[i].offsetHeight
        }
        var ul1 = document.getElementsByClassName("wang-ul")[0];

        function lunbo(laji, index) {
          if (index == 0) {
            ul1.scrollTop = 0;
            return 0;
          }
          //图片的起始位置
          var b = divs[index].offsetHeight;
          //图片的偏移量
          var d = laji - b;
          var t = 0;
          var c = 20;
          var timer = setInterval(() => {
            t++;
            ul1.scrollTop = b + (d / c) * t;
            if (t >= c) {
              this.aaa(index);
              // console.log(this.aaa)
              this.numb = true;
              clearInterval(timer)
            }
          }, 20)
        }

        lunbo.call(this, laji, index)

        var ul = document.getElementsByClassName("wang-ul")[0];
        var two = document.getElementsByClassName("wang-list");
        var divs = document.getElementsByClassName("foods-top")[0];

        if (this.numb == true) {
          window.timer3 = setInterval(() => {
            for (var i = 0; i < two.length; i++) {
              var x = two[i].offsetHeight;
              if (this.diss.length == 0) {
                var h = x;
              } else {
                var h = x + this.diss[i - 1];
              }
              this.diss.push(h);
              if (ul.scrollTop >= this.diss[i]) {
                this.aaa(i + 1);
                if (i >= 8) {
                  divs.style.top = -536 + "px";
                }
              }
            }
          }, 20)
        }
      },
      wfrmask(name, index, array, array1) {
        this.array4 = array1
        this.suzhu2 = array;
        this.numbre1 = this.suzhu2[0].price;
        this.shopname = name;
        this.suoyin = index;
        this.mask2 = true
      },
      nnclick(index, price, names) {
        this.nnn = false;
        this.or1 = index;
        this.RMB = price;
        this.namess = names;
      },
      delete1() {
        this.or1 = 0
        this.nnn = true;
        this.mask2 = false;
      },
      NNcl(array4, namess) {
        var fff = array4.specfoods[this.or1].price
        store.commit("add", fff);
        this.const2 = store.state.price;
        this.bg = false;
        this.bg1 = true;
        this.ttt = true;
        if (array4.choose[namess]) {
          for (var i = 0; i < this.obj1.length; i++) {
            if (namess == this.obj1[i].shangpin) {
              this.obj1[i].jisuan1++;
            }
          }
        } else {
          var zz = 1;
          array4.choose[namess] = true;
          var gg = {
            name: array4.name,
            pice: array4.specfoods,
            pice1: this.RMB,
            shangpin: namess,
            jisuan1: zz,
          }
          this.obj1.push(gg)
        }
        this.cot++;
        array4.count += 1;
        var math1 = "";
        this.mask2 = false;
        if (array4.count != 0) {
          this.bg = true;
        } else {
          this.bg = false;
        }
      },
      updown(ev) {
        this.nnshow = !this.nnshow;
      },
      wfrmask1(array1,name1,index) {
        for (var i = 0;i<array1.specfoods.length;i++){
          var fff = array1.specfoods[i].price;
        }
        store.commit("add", fff);
        this.const2 = store.state.price;
        // console.log(this.const2)
        this.cot++;
        array1.count++
        this.$forceUpdate(array1.specfoods);
        this.bg = false;
        this.bg1 = true;
        this.ttt = true;
        var lis=true
        for (var i=0;i<this.obj1.length;i++){
          if (this.obj1[i].name == name1) {
            this.obj1[i].jiage1++;
            lis=false
          }
        }
        if (lis) {
          var gg = {
            name: name1,
            pice: array1.specfoods,
            jiage1:this.jiage
          }
          this.obj1.push(gg);
        }
      },
      wfrcli(array1,index) {
        // console.log(array1);
        this.cot--;
        array1.count--;
        this.$forceUpdate();
        var arra = "";
        // arra = this.obj1[this.or1].pice;
        for (var i = 0;i<this.obj1.length;i++){
          for (var j=0;j<this.obj1[i].pice.length;j++){
            arra = this.obj1[i].pice[j];
          }
        }
        store.commit("eee",arra.price);
        this.const2 = store.state.price;

        if (this.const2 == 0){
          this.nnshow = false
          this.bg = true;
          this.bg1 = false;
        }
      },
      dianji(ev) {
        this.jj = true
        setTimeout(() => {
          this.jj = false;
        }, 4000)
      },
      clear1(ev) {
        store.commit("clear")
        this.cot = 0;
        this.array4.count = 0;
        this.nnshow = false;
        var divss = document.getElementsByClassName("nn-foods-ul")[0];
        divss.innerHTML = "";
      },
      wam(index,jiage1,$event) {
        this.wangid = index;
        if (this.cot != 0){
          this.cot--;
        }
        this.qq1 = this.obj1[this.wangid].pice[0].price;
        store.commit("eee",this.qq1);
        this.const2 = store.state.price;
        this.obj1[index].jiage1--;
        if ( this.obj1[index].jiage1 == 0){
          this.ttt = false;
          var div33 = document.getElementsByClassName("Shopping-Cart")[index];
          div33.remove()
          var uls1 = document.getElementsByClassName("nn-foods-ul")[0];
          if (uls1.innerHTML == ""){
            this.nnshow = false
            this.bg = true;
            this.bg1 = false;
          }
        }
      },
      wam1(index,nnArr,$event){
        if (this.cot != 0){
          this.cot--;
        }
        this.array4.count--
        nnArr.jisuan1--
        if (nnArr.jisuan1 <=0){
          var list1 = document.getElementsByClassName("Shopping-Cart")[0];
          list1.remove()
        }
        this.wangid = index;
        var div11 = document.getElementsByClassName("nn-foods-ul")[0]
        if (div11.innerHTML == "") {
          this.nnshow = false;
          this.bg = true;
          this.bg1 = false;
        }
        this.qq1 = this.obj1[this.wangid].pice[0].price;
        store.commit("eee",this.qq1);
        this.const2 = store.state.price;

      },
      ttx996(index) {
        this.class1 = index
      },
      goback(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>
  .wfr-logo-back{
    text-align: center;
    width: 3rem;
    height: 2rem;
    line-height: 2rem;
    display: inline-block;
    position: absolute;
    right: -20%;
    top: -.5rem;
    -webkit-font-smoothing: antialiased;
    font-size: 0.3rem;
    transform: scale(0.8);
  }
  .ttx_top img{
    width: 4rem;
  }
  .rating_header {
    width: 100%;
    overflow: hidden;
    padding: 1rem 0;
    margin-bottom: 0.5rem;
  }
  .rating_header_left {
    width: 30%;
    text-align: center;
    float: left;
  }
  .rating_header_right {
    float: right;
    width: 65%;
    margin-left: 0.2rem;
  }
  .ellipsis {
    background-color: white;
    font-size: .55rem;
    color: #999;
    width: 2.2rem;
    padding: .2rem;
    border: .025rem solid #ebebeb;
    border-radius: .15rem;
    margin-right: .3rem;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ttx_top {
    padding: .2rem .15rem;
  }

  .food_img_ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .4rem;
  }

  .ttx_01 {
    display: flex;
    justify-content: space-between;
    margin-bottom: .3rem;

  }

  .rated_at {
    font-size: .4rem;
    color: #999;
    margin-left: 5rem;
  }

  .tag_list_ul .blue {
    background-color: #3190e8 !important;
    color: white;
    font-weight: 100;
  }

  #ttx_id3 {
    margin-top: .3rem;
  }

  #ttx_id4 {
    margin-top: .3rem;
  }

  .p1 {
    font-size: .65rem;
    line-height: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .span1 {
    color: #666;
    margin-right: .5rem;
  }

  .delivery_time {
    font-size: .4rem;
    color: #999;
  }
  .tag_list_ul {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: .5rem;
  }
  .tagActivity {
    font-size: .6rem;
    color: #6d7885;
    padding: .3rem;
    background-color: #ebf5ff;
    border-radius: .2rem;
    border: 1px;
    margin: 0 .4rem .2rem 0;
  }

  .unsatisfied_tagActivity {
    color: #fff;
    background-color: #f5f5f5;
    font-size: .6rem;
    padding: .3rem;
    border-radius: .2rem;
    border: 1px;
    margin: 0 .4rem .2rem 0;
  }
  .rating_list_ul {
    background-color: #fff;
    padding: 0 .5rem;
  }

  .rating_list_li {
    border-top: 1px solid #f1f1f1;
    display: -ms-flexbox;
    display: flex;
    padding: .6rem 0;
  }
  .user_avatar {
    width: 1.5rem;
    height: 1.5rem;
    border: .025rem;
    border-radius: 50%;
    margin-right: .8rem;
  }

  .username_star {
    font-size: .55rem;
    color: #666;
  }

  .username {
    color: #666;
    margin-bottom: .2rem;
  }

  .rating_container {
    position: relative;
    top: 7.5rem;
  }
  .time_spent_desc {
    font-size: .55rem;
    color: #666;
    margin-left: .15rem;
  }
  .Shopping-Cart-add {
    text-align: center;
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
    line-height: 0.7rem;
    color: white;
    background-color: #3190e8;
    border-radius: 50%;
  }

  .Shopping-Cart-count {
    display: inline-block;
    color: #000;
    margin: 0 0.3rem;
  }

  .Shopping-Cart-d {
    text-align: center;
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.7rem;
    color: #3190e8;
    border-radius: 50%;
    border: 1px solid #3190e8;
  }

  .nncolor {
    width: 70%;
    background-color: white;
    color: #000;
    float: left;
  }

  .nncolor-right {
    width: 26%;
    float: right;
    margin: 0.4rem 0;
    /*background-color: #595757;*/
  }

  .Shopping-Cart-sapn3 {
    font-size: .4rem;
    color: #666;
    font-weight: 200;
  }

  .Shopping-Cart-div {
    width: 95%;
    overflow: hidden;
    margin: 0.3rem 0;
  }

  .Shopping-Cart-div1 {
    float: right;
  }

  .Shopping-Cart-sapn2 {
    font-size: .75rem;
    color: #f60;
    font-family: Helvetica Neue, Tahoma;
    font-weight: 700;
  }

  .Shopping-Cart-sapn1 {
    display: block;
    font-size: .9rem;
    color: #666;
    font-weight: 700;
    float: left;
  }

  .Shopping-Cart {
    width: 100%;
    overflow: hidden;
    padding: 0.7rem 0.2rem;
    color: #ccc;
  }

  .nnrmb-float {
    height: .8rem;
    overflow: hidden;
    line-height: .7rem;
    padding: 0.6rem .6rem;
    background-color: #eceff1;
  }

  .nnrmb-float-left {
    float: left;
  }

  .wfr-vv {
    margin-top: 0.3rem;
    width: 3rem;
    display: inline-block;
    float: right;
  }






  .wfr-vv svg {
    width: 1.3rem;
    height: 1.3rem;
    display: inline-block;
    margin-top: -.7rem;
  }

  .wfr-vv span {
    margin-bottom: 1rem;
    line-height: .8rem;
    width: 1.5rem;
    font-size: .7rem;
    color: #666;
    position: absolute;
    top: 0.5rem;
  }

  .nnrmb {
    background-color: white;
    width: 100%;
    position:absolute;
    bottom: 2.2rem;
    animation: flash 0.3s linear;
  }
  @keyframes flash {

    0%{
      bottom:-15rem;
    }
    100%{
      bottom:2.2rem;
    }

  }
  .wnn {
    text-align: center;
    display: inline-block;
    height: 1rem;
    padding: 0.3rem 0.3rem;
    color: white;
    font-size: 0.8rem;
    line-height: 1rem;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 45%;
    left: 25%;
    z-index: 10;
    animation: wunai 4s;
  }

  @keyframes wunai {
    0% {
      opacity: 0
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .nnbgcolor {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 3rem;
    top: 4.6rem;
    z-index: 13;
  }

  .wfr-nn-add1 {
    display: inline-block;
    width: 0.8rem;
    height: 0.9rem;
    line-height: 0.6rem;
    color: white;
    float: right;
  }

  .wfr-ff-span2 {
    color: black;
    width: 0.7rem;
    height: 0.7rem;
    font-weight: 200;
    font-size: 0.75rem;
    margin-right: .2rem;
  }

  .wfr-ff-span1 {
    text-align: center;
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    line-height: 0.6rem;
    border-radius: 50%;
    color: #3190e8;
    border: 1px solid #3190e8;
    margin-left: 2rem;
    margin-right: 0.1rem;
  }

  .wfr-nn-add {
    width: 7rem;
    height: 0.9rem;
    position: relative;
    overflow: hidden;
  }

  .wfr-nn-ff {
    width: 4rem;
    height: 0.9rem;
    line-height: 0.8rem;
    color: black;
    float: right;
    overflow: hidden;
    display: inline-block;
    animation: hh 0.5s;

  }

  @keyframes hh {
    0% {
      left: 10rem;
      opacity: 0;
      transform: translateX(1rem);
    }
    100% {
      left: 0;
      opacity: 1;
      transform: translateX(0);
    }
  }

  .wfr-Specifications {
    display: inline-block;
    font-size: .55rem;
    color: #fff;
    padding: .1rem .2rem;
    font-weight: 300;
    background-color: #3190e8;
    border-radius: .2rem;
    border: 1px solid #3190e8;
    float: right;
  }

  .wfr-jia {
    border-radius: 50%;
    background-color: #3190e8 !important;
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    float: right;
  }

  .wfr-ff-span3 {
    text-align: center;
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    line-height: 0.5rem;
    color: #595757;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: white;
  }

  .wfr-ff-span4 {
    width: 0.2rem;
    color: black;
    font-weight: 300;
    font-size: 0.7rem;
    background-color: white;
  }

  .wfr-nn-ff11 {
    width: 2rem;
    display: inline-block;
    z-index: 10;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0.7rem;
  }

  .nn-foods-ul {
    width: 100%;
    background-color: white;
  }

  .wfrBGcolor {
    background-color: #3190e8 !important;
    margin-left: .4%;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    display: inline-block;
    text-align: center;
    display: flex;
    background-color: #3d3d3f;
    position: absolute;
    padding: 0.4rem .4rem;
    border: .18rem solid #444;
    border-radius: 50%;
    left: .55rem;
    top: -.8rem;
  }

  .nn-foods-rmb {
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .wfr-111-span1 {
    color: red;
    border: 1px solid #ccc;
  }






  .wfr-111 {
    position: absolute !important;
    top: -3rem !important;
  }

  .WFRbg {
    text-align: center;
    background: rgb(94, 196, 82) !important;
    height: 2.2rem;
    float: right;
    width: 33%;
    line-height: 2.2rem;
    color: white;
    font-weight: 300;
    font-size: .75rem;
    padding: 0 0.3rem;
    margin-left: 0.5rem;
  }

  .wfr-nn-span1 {
    color: #666;
  }

  .wfr-count {
    font-weight: 100;
    text-align: center;
    width: .85rem;
    height: .85rem;
    line-height: .85rem;
    border-radius: 50%;
    display: inline-block;
    color: white;
    background-color: red;
    position: absolute;
    top: -1rem;
    left: 2.5rem;
  }

  .wfrDelete {
    color: #666;
    font-weight: 100;
    font-size: 1.4rem;
    position: absolute;
    top: -.5rem;
    right: .7rem;
  }

  .wfr-norms1-right {
    float: right;
  }

  .wfr-norms1-left {
    float: left;
  }

  .wfr-norms1 {
    line-height: 1.5rem;
    overflow: hidden;
  }
  .wfr-norms1-span3 {
    display: block;
    padding: 0 0.3rem;
    border-radius: 0.2rem;
    background-color: #3199e8;
    font-size: .3rem;
    font-weight: 200;
  }

  .wfr-norms1-span2 {
    color: #ff6000;
    font-size: 0.9rem;

  }

  .wfr-norms1-span1 {
    color: #ff6000;
    font-size: .4rem;
  }

  .wfr-norms1 {
    margin-top: 1.7rem;
    height: 1.68rem;
    background-color: #f1f1f1;
    padding: .5rem;
    border: 1px;
    border-bottom-left-radius: .2rem;
    border-bottom-right-radius: .2rem;
  }

  .foodcolor {
    border: .025rem solid #3199e8 !important;
    color: #3199e8 !important;
  }

  .wfr-shopname {
    font-size: 0.85rem;
    margin: 0.7rem 0 1rem 0;
    position: relative;
  }

  .wfr-norms {
    margin-left: 5%;
    font-size: .6rem;
    color: #888;
    margin-bottom: 0.5rem;
  }

  .wfr-nn-txt {
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-around;
    justify-items: center;
  }

  .wfr-nn-text-div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 2.2rem;
  }

  .wfr-nn-text {
    text-align: center;
    width: 2.2rem;
    height: 1rem;
    line-height: 1rem;
    font-size: .7rem;
    padding: .3rem .1rem;
    border: .025rem solid #ddd;
    border-radius: .2rem;
    font-weight: 300;
  }

  .mask-content h3 {
    text-align: center;
    color: #666;
  }

  .mask-content {
    height: 30%;
    position: fixed;
    top: 35%;
    left: 15%;
    width: 70%;
    background-color: #fff;
    z-index: 18;
    border: 1px;
    border-radius: .2rem;
  }

  .rrrrr {
    color: white;
  }

  .sdbsad {
    animation: yc .5s;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
  }

  @keyframes yc {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .wclass {
    color: white;
  }

  .wangtt {
    border-left: 2px solid #3190e8 !important;
    background-color: white !important;
  }

  .wfr-new-product {
    display: block;
    height: 1rem;
    line-height: 1rem;
    position: absolute;
    top: -0.1rem;
    left: -0.65rem;
    font-size: .65rem;
    padding: 0 0.3rem;
    -webkit-font-smoothing: antialiased;
    transform: rotateZ(311deg);
  }

  .wfr-money-div {
    margin: 0.6rem 0 0.1rem 0;
    overflow: hidden;
  }

  .wfr-money-span {
    color: #666666;
  }

  .wfr-nn-money {
    width: 30%;
    float: left;
    font-size: .65rem;
    color: #f60;
    margin-right: .05rem;
    font-weight: 700;
  }

  .wang-nn-p1 {
    font-size: .5rem;
    color: #999;
    line-height: .6rem;
    margin: 0.3rem 0;
  }

  .wfr-nn-span1 {
    color: black;
    font-weight: 400;
    font-size: 0.5rem;
  }







  .wang-nn-float {
    overflow: hidden;
  }

  .wang-nn-left {
    width: 25%;
    float: left;
  }

  .wang-nn-right {
    width: 75%;
    float: right;
  }

  .wfr-image {
    width: 2rem;
    height: 2rem;
  }

  .wfr-nn-span {
    display: inline-block;
    transform: scale(0.7);
    font-size: 0.4rem;
    color: rgb(241, 136, 79);
    border-radius: 2rem;
    border: 1px solid rgb(240, 115, 115);
  }

  .wfr-nn-div span {
    color: #000000;
  }

  .wang-foods-span4 {
    display: inline-block;
    color: #c1c1c1;
    position: absolute;
    right: 0.3rem;
    bottom: 0.9rem;
  }

  .wang-foods-span2 {
    font-size: .7rem;
    color: #666;
    font-weight: 700;
  }

  .wang-foods-span3 {
    font-size: .5rem;
    color: #999;
    width: 30%;
    overflow: hidden;
  }

  .wang-foods-name {
    position: relative;
    padding: 0.8rem 0;
  }

  .wang-list {
    width: 100%;
  }

  .wang-list-name {
    width: 100%;
    background-color: white;
    padding: .6rem 0;
    border-bottom: 1px solid #f8f8f8;
    position: relative;
    overflow: hidden;
  }

  .wang-float {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .wfr-foods-ul {
    float: left;
    width: 26%;
    height: 100%;
    padding-top: 7.2rem;
  }

  .wang-ul {
    height: 24rem;
    overflow-y: scroll;
    float: right;
    width: 74%;
    position: absolute;
    right: 0;
    top: 7.2rem;
  }

  .wfr-nn-position {
    width: 100%;
    position: absolute;
  }

  .wfr-foods-right {
    height: 2.2rem;
    float: right;
    width: 33%;
    line-height: 2.2rem;
    color: white;
    font-weight: 300;
    font-size: .65rem;
    padding: 0 0.3rem;
    margin-left: 0.5rem;
    background-color: #535356;
  }

  .wfr-foods-left > p {
    font-weight: 400;
    font-size: .8rem;
    padding: 0.23rem 0;
  }

  .wfr-foods-left > span {
    font-weight: 300;
    font-size: .61rem;
  }

  .wfr-foods-left > p,
  span {
    color: white;
  }

  .wfr-foods-float {
    margin-left: 20%;
    width: 80%;
    height: 100%;
    overflow: hidden;
  }

  .wfr-foods-left {
    float: left;
  }

  .wfr-foods-span1 {
    margin-left: .4%;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    display: inline-block;
    text-align: center;
    display: flex;
    background-color: #3d3d3f;
    position: absolute;
    padding: 0.4rem .4rem;
    border: .18rem solid #444;
    border-radius: 50%;
    left: .55rem;
    top: -.8rem;
  }

  .wfr-foods-svg {
    display: inline-block;
  }

  .icon {
    width: 1.3rem;
    height: 1.3rem;
  }

  .wfr-foods-footer {
    width: 100%;
    height: 2.2rem;
    background-color: #333;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 20;
  }

  .foods-father {
    overflow: hidden;
    height: 22rem;
    position: relative;
    overflow-y: scroll;
  }

  .foods-top {
    position: absolute;
    top: 0;
    transition: all 0.5s;
  }

  .kkkkk:nth-child(1) {
    background-color: white;
    border-left: 2px solid #3190e8;
  }

  .wfrFoods {
    border-left: .15rem solid #3190e8 !important;
    background-color: #fff !important;
  }

  .wfr-foods-type span {
    margin-left: 0.2rem;
    font-size: .6rem;
    color: #666;
    font-weight: 300;
  }

  .wfr-foods-type img {
    width: .5rem;
    height: .6rem;
  }

  .wfr-foods-type {
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 2.8rem;
    line-height: 2.8rem;
    width: 4.73rem;
    padding: 0 .4rem;
    border-bottom: .025rem solid #ededed;
    box-sizing: border-box;
    border-left: .15rem solid #f8f8f8;
    position: relative;
  }







  .wfrWareSpan2,
  .wfrWareSpan1 {
    display: inline-block;
    padding-bottom: 0.16rem;
    color: #3190e8 !important;
    border-bottom: 2px solid #3190e8 !important;
  }

  .body2 {
    width: 100%;
    height: 100%;
    background-color: #F1F1F1;
  }

  .wfr-wares {
    width: 100%;
    position: fixed;
    top: 5rem;
    z-index: 10;
    width: 100%;
    height: 1rem;
    background-color: #fff;
    padding: .6rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
    text-align: center;
    overflow: hidden;
  }

  .wfr-evaluate-right {
    line-height: 1rem;
    width: 50%;
    float: right;
    color: #666;
    font-size: .69rem;
  }

  .wfr-evaluate-right span{
    color: #888;
  }
  .wfr-ware-left {
    line-height: 1rem;
    width: 50%;
    float: left;
    font-size: .69rem;
    color: #666;
    border-bottom: .12rem solid #fff;
  }
  .wfr-ware-left span{
    color: #888;
  }
  .cart_icon {
    fill: black;
    position: absolute;
    top: 17rem;
    z-index: 15;
  }

  .tip_icon {
    margin-right: 0.15rem;
  }

  .tip_icon2-span {
    color: #f1f1f1;
    font-size: 0.3rem;
    font-weight: 200;
  }

  .footer_arrow {
    width: 0.6rem;
    height: 0.6rem;
    fill: white;
    margin-bottom: 0.2rem;
    margin-left: 0.3rem;
  }

  .tip_icon2 {
    float: right;
  }

  .wfr-info-logo-activity {
    width: 93%;
    position: absolute;
    top: 3.8rem;
    margin-top: 0.2rem;
  }

  .wfr-info-logo-activity span {
    color: #f1f1f1;
    font-size: 0.3rem;
    font-weight: 200;
    float: left;
  }

  .wfr-info-name-p2 {
    font-weight: 100;
    font-size: .3rem;
    color: #f1f1f1;
    margin: 0 0.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .wfr-info-name-p1 {
    margin: 0.55rem 0.1rem;
    font-weight: 100;
    font-size: .3rem;
    color: #f1f1f1;
  }

  .wfr-info-name {
    position: absolute;
    top: 0.3rem;
    left: 3.5rem;
  }

  .wfr-info-name span {
    font-size: .8rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: .3rem;
  }

  .header_cover_img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }

  .wfr-info-logo {
    width: 100%;
    height: 5.2rem;
    overflow: hidden;
    position: fixed;
    z-index: 10;
  }

  .wfr-stroe-infor {
    height: 5.2rem;
    position: relative;
    z-index: 10;
    background-color: rgba(119, 103, 137, .55);
    padding: .4rem 0 .4rem .4rem;
    width: 100%;
    overflow: hidden;
  }

  .wfr-stroe-infor-img {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: .2rem;
    position: absolute;
    top: 0.3rem;
    left: 0.5rem;
    z-index: 10;
  }

  .change_show_type {
    display: flex;
    background-color: #fff;
    padding: .3rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
    justify-content: space-around;
  }

  .activity_show {
    color: #3190e8;
    border-color: red;
  }

  .food_container {
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
  }

  .menu_container {
    display: flex;
    flex: 1;
    position: revert;
  }

  #wrapper_menu {
    width: 3.8rem;
  }

  .menu_left_li_activity_menu {
    border-left: .15rem solid #3190e8;
    background-color: #fff;
    padding: 1rem .4rem;
  }

  .menu_left_li_activity_menu img {
    width: .5rem;
    height: .6rem;
  }

  .menu_left_li_activity_menu span {
    font-size: .6rem;
    color: #666;
  }

  .category_num {
    position: absolute;
    top: .1rem;
    right: .1rem;
    background-color: #ff461d;
    line-height: .6rem;
    text-align: center;
    border-radius: 50%;
    border: .025rem solid #ff461d;
    color: #fff;
    font-family: Helvetica Neue, Tahoma, Arial;
  }

  .menu_left_li {
    padding: .7rem .3rem;
    border-bottom: .025rem solid #ededed;
    /* box-sizing: border-box; */
    border-left: .15rem solid #f8f8f8;
    position: relative;
  }

  .menu_left_li img {
    width: .5rem;
    height: .6rem;
  }

  .menu_left_li span {
    font-size: .6rem;
    color: #666;
  }

</style>
