<template>
  <div>
    <router-link to="/settlement">
    <div class="wfr-info-logo" :style="'background: url('+imgurl1+wfrData.image_path+') 0% 0% / cover no-repeat'">
      <div class="wfr-stroe-infor">
        <img :src="imgurl1+wfrData.image_path" class="wfr-stroe-infor-img">
        <div class="wfr-info-name">
          <span>{{wfrData.name}}</span>
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
      <div>
      </div>
    </div>
    </router-link>
    <!--顶部下的-->
    <div class="change_show_type">
      <div id="ttx_id3" :class="{ttx_choosed:ttx_show3}" @click="ttxLy">
        商品
      </div>
      <div id="ttx_id4" :class="{ttx_choosed:ttx_show4}" @click="ttxLx">
        评价
      </div>

    </div>
    <!--商品-->
    <div class="food_container" v-show="ttx_show1">

    </div>
    <!--评价-->
    <div v-show="ttx_show2" class="rating_container">
      <section type="2"
               style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
      </section>
      <div>
        <header class="rating_header" style="background-color: white">
          <section class="rating_header_left">
            <p style="font-size: 1.2rem;color: #f60">4.7</p>
            <p style="font-size: .6rem;color: #666;
    margin-bottom: .3rem;">综合评价</p>
            <p style="font-size: .4rem;
    color: #999;">高于周边商家76.9%</p>
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
                    <section class="rating_container">
                      <section class="star_container">
                        {{evaluateList.rating_star}}
                        <span class="time_spent_desc">按时送达</span>
                      </section>

                    </section>
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
</template>

<script>
  export default {
    name: "businesstore",
    data() {
      return {
        shopid: "",
        wfrData: "",
        imgurl1: "//elm.cangdu.org/img/",
        ttx_show1: true,
        ttx_show2: false,
        ttx_show3: true,
        ttx_show4: false,
        value5: 3.7,
        value6: 4,
        evaluate: "",
        class1: 0,
        evaluateList: "",
        username: "sss",
        image_hash: "56",
        rated_at: "das",
        food_name: "dasd"
      }
    },
    created() {
      this.shopid = this.$route.query.id;
      var api6 = `http://cangdu.org:8001/shopping/restaurant/${this.shopid}`
      this.axios.get(api6).then((responent) => {
        this.wfrData = responent.data
        console.log(this.wfrData)
      })

      //评价分类请求接口
      this.$http.get(`http://cangdu.org:8001/ugc/v2/restaurants/1/ratings/tags`).then((response) => {
        console.log(response.data);
        this.evaluate = response.data;
      });
      //评价列表
      this.$http.get(`http://cangdu.org:8001/ugc/v2/restaurants/1/ratings?offset=0&limit=10`).then((response) => {
        console.log(response.data);
        this.evaluateList = response.data;
      });
    },
    methods: {
      ttxLy(ev) {
        if (this.ttx_show3 == true || this.ttx_show1 == true) {
          this.ttx_show1 = true;
          this.ttx_show2 = false;
          this.ttx_show4 = false;
          this.ttx_show3 = true;
        } else {
          this.ttx_show1 = true;
          this.ttx_show2 = false;
          this.ttx_show4 = false;
          this.ttx_show3 = true;
        }
      },
      ttxLx() {
        if (this.ttx_show2 == true || this.ttx_show1 == true) {
          this.ttx_show2 = true;
          this.ttx_show1 = false;
          this.ttx_show3 = false;
          this.ttx_show4 = true;
        } else {
          this.ttx_show2 = true;
          this.ttx_show1 = false;
          this.ttx_show3 = false;
          this.ttx_show4 = true;
        }
      },
      ttx996(index) {
        this.class1 = index
      }
    }

  }
</script>

<style scoped>
  .food_name_ul {
    display: flex;
    flex-wrap: wrap;
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

  .ttx_top img {
    width: 3rem;
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
    background-color: #3190e8;
  }

  #ttx_id3 {
    margin-top: .3rem;
  }

  #ttx_id4 {
    margin-top: .3rem;
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

  .wfr-info-logo {
    height: 5.2rem;
    overflow: hidden;
    position: relative;
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

  .food_container {
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
  }

  .menu_left_li_activity_menu img {
    width: .5rem;
    height: .6rem;
  }

  .menu_left_li_activity_menu span {
    font-size: .6rem;
    color: #666;
  }

  .menu_left_li img {
    width: .5rem;
    height: .6rem;
  }

  .menu_left_li span {
    font-size: .6rem;
    color: #666;
  }

  .menu_container .menu_right .menu_detail_list .menu_detail_link .menu_food_description .food_description_head .attributes_ul .attribute_new {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #4cd964;
    width: 2rem;
    height: 2rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: end;
    align-items: flex-end;
    transform: rotate(-45deg) translate(-.1rem, -1.5rem);
    border: none;
    border-radius: 0;
  }


  .menu_container .menu_right .menu_detail_list .menu_detail_link .menu_food_description .food_activity span {
    font-size: .3rem;
    border: 1px solid currentColor;
    /* border-radius: .3rem; */
    padding: .08rem;
    display: inline-block;
    transform: scale(.8);
    margin-left: -.35rem;
  }

  .menu_container .menu_right .menu_detail_list .menu_detail_footer {
    margin-left: 2.4rem;
    font-size: .6rem;
    margin-top: .3rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }


  .cart_module svg {
    width: .9rem;
    height: .9rem;
    fill: #3190e8;
  }

  .rating_header {
    display: flex;
    padding: .8rem .5rem;
    margin-bottom: .5rem;
  }

  .rating_header_left {
    flex: 4;
    text-align: center;
  }

  rating_header_right {
    flex: 4;
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

  .tag_list_ul li:nth-child(3) {
    background-color: #f5f5f5;
    color: #aaa;
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
    top: .2rem;

  }

  .time_spent_desc {
    font-size: .55rem;
    color: #666;
    margin-left: .15rem;
  }
</style>
