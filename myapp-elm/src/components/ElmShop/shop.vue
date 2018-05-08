<template>
  <div class="body1">
    <ul class="wfr-logo-location">
      <li>
        <router-link to="/seach" class="wfr-logo-seach">
          <i class="el-icon-search">
          </i>
        </router-link>
      </li>
      <router-link to="/">
        <li class="wfr-icon-list">
          {{location}}
        </li>
      </router-link>
      <li class="wfr-icon-li">
        <router-link to="/personal">
          <svg viewBox="0 0 28 33" class="path2">
            <path fill-rule="evenodd"
                  d="M20.798 19.289c2.636-2.002 4.215-5.091 4.215-8.437 0-5.886-4.845-10.647-10.808-10.647S3.397 4.966 3.397 10.852c0 3.345 1.578 6.433 4.212 8.435l.264-2.678C4.358 18.32 1.591 21.403.168 25.187l1.478.556v-1.579c-1.485.73-1.485.73-1.501 1.079-.054.188-.054.188-.069.278a2.58 2.58 0 0 0-.026.229 9.112 9.112 0 0 0-.019.4c-.008.265-.014.617-.018 1.039-.005.511-.006 1.037-.006 1.451v.027c-.004 1.732 1.41 3.129 3.154 3.129h22.082a3.18 3.18 0 0 0 3.172-3.153l.011-1.305.008-.897.003-.296.001-.083v-.022-.006-.001l.002-.278-.093-.262c-1.385-3.918-4.203-7.122-7.812-8.88l.263 2.678zm-1.911-2.516l-2.045 1.553 2.309 1.125c2.856 1.392 5.106 3.949 6.218 7.093l-.09-.54V26.033l-.001.083-.003.296-.008.897-.011 1.305c0 .01-.011.021-.013.021H3.161c-.007 0 .005.011.005.032v-.031c0-.404.001-.92.006-1.418.004-.4.01-.732.017-.969.004-.121.008-.212.012-.262l-.006.043c-.009.06-.009.06-.058.229-.01.336-.01.336-1.49 1.063H2.74l.385-1.024c1.141-3.035 3.35-5.495 6.131-6.849l2.309-1.124-2.045-1.554c-1.859-1.412-2.964-3.576-2.964-5.92 0-4.129 3.418-7.488 7.649-7.488s7.649 3.359 7.649 7.488c0 2.344-1.106 4.509-2.966 5.921z"
                  class="path1"></path>
          </svg>
        </router-link>
      </li>
    </ul>
    <swiper ref="mySwiper" class="wfr-luobo" :options="swiperOption">
      <swiper-slide class="wfr-lunbo1" v-for="data in swiperSlidesData">
      <ul class="wfr-lunobo-ul1">
        <li v-for="arra1 in data" class="wfr-lunobo-list">
          <router-link :to="{name:'FoodDetails',params:{id:arra1.id}}">


            <div @click="wfrOnclick1(arra1.id)">
              <img :src="wfrhttp+arra1.image_url">
              <div class="wfr-lunbo-text">{{arra1.title}}</div>
            </div>
          </router-link>

        </li>
      </ul>
    </swiper-slide>
      <swiper-slide class="wfr-lunbo1" v-for="data in swiperSlidesData">
        <ul class="wfr-lunobo-ul1">
          <li v-for="arra2 in data" class="wfr-lunobo-list">
            <router-link :to="{name:'FoodDetails',params:{id:arra2.id}}">

            <div @click="wfrOnclick2(arra2.id)">
              <img :src="wfrhttp+arra2.image_url">
              <div class="wfr-lunbo-text">{{arra2.title}}</div>
            </div>
            </router-link>
          </li>
        </ul>
      </swiper-slide>
      <span class="wfr-Circular1"></span>
      <span class="wfr-Circular2"></span>
    </swiper>
    <div class="wfr-city-business">
      <div class="wfr-city-business-loca">
        <svg data-v-070ab150="" class="shop_icon">
          <use data-v-070ab150="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop">
            <svg viewBox="0 0 32 31" id="shop" width="100%" height="100%">
              <g fill-rule="evenodd">
                <path
                  d="M28.232 1.822C27.905.728 26.97.152 25.759.152H5.588c-1.252 0-1.867.411-2.397 1.415l-.101.243-.443 1.434-.975 3.154-.002.007C.837 9.101.294 10.854.26 10.956l-.059.259c-.231 1.787.337 3.349 1.59 4.448 1.159 1.017 2.545 1.384 3.865 1.384.07 0 .07 0 .132-.002-.01.001-.01.001.061.002 1.32 0 2.706-.367 3.865-1.384a4.96 4.96 0 0 0 .413-.407l-1.043-.946-1.056.931c1.033 1.171 2.51 1.792 4.21 1.801.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.148-.13.287-.267.418-.411l-1.044-.944-1.057.93c1.033 1.174 2.511 1.796 4.213 1.806.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.15-.131.29-.27.422-.416l-1.046-.943-1.058.929c1.033 1.177 2.513 1.801 4.218 1.811.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384 1.206-1.058 1.858-2.812 1.676-4.426-.069-.61-.535-2.207-1.354-4.785l-.109-.342a327.554 327.554 0 0 0-1.295-3.966l-.122-.366.014.043h.004zm-2.684.85l.12.361.318.962c.329.999.658 2.011.965 2.973l.108.338c.719 2.262 1.203 3.92 1.24 4.249.08.711-.233 1.553-.735 1.993-.553.485-1.308.685-2.008.685l-.098-.002c-.987-.007-1.695-.306-2.177-.854l-1.044-1.189-1.06 1.175a2.192 2.192 0 0 1-.188.185c-.553.485-1.308.685-2.008.685l-.098-.002c-.985-.007-1.693-.305-2.174-.852l-1.043-1.185-1.059 1.171c-.058.064-.12.125-.186.183-.553.485-1.308.685-2.008.685l-.098-.002c-.984-.007-1.692-.304-2.173-.85L9.101 12.2l-1.058 1.166a2.248 2.248 0 0 1-.184.181c-.553.485-1.307.685-2.008.685l-.061-.001-.131.001c-.701 0-1.455-.2-2.008-.685-.538-.472-.767-1.102-.654-1.971l-1.396-.18 1.338.44c.043-.13.552-1.775 1.425-4.599l.002-.007.975-3.155.443-1.434-1.345-.415 1.245.658c.054-.102.042-.085-.083-.001-.122.082-.143.086-.009.086H25.763c.053 0-.164-.133-.225-.339l.014.043-.004-.001zM5.528 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"></path>
                <path
                  d="M.28 29.72c0-.707.58-1.28 1.277-1.28h28.155a1.28 1.28 0 0 1 .007 2.56H1.561A1.278 1.278 0 0 1 .28 29.72z"></path>
                <path
                  d="M26.008 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"></path>
              </g>
            </svg>
          </use>
        </svg>
        <span class="wfr-business">附近商家</span>
      </div>
      <ul>
        <li v-for="arr5 in locabusiness" class="wfr-locabusiness-list">
          <div class="wfr-business-bs">
            <img :src="imgurl+arr5.image_path" class="wfr-locabusiness-img">
          </div>
          <div class="wfr-business-info">
            <div class="wfr-locabusiness-tt">
              <div class="wfr-left">
                <span class="wfr-locabusiness-text">品牌</span>
                <span class="wfr-locabusiness-name">{{arr5.name}}</span>
              </div>
              <div class="shop_detail_ul">
                <span class="supports">保</span>
                <span class="supports">准</span>
                <span class="supports">票</span>
              </div>
            </div>
            <div @click="wfrMerchant(arr5.id)">
              <div class="wfr-Place-order-float">
                <div class="wfr-Place-order">
                  <span>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
                <svg data-v-5df6cab1="" class="grey_fill"><use data-v-5df6cab1=""
                                                               xmlns:xlink="http://www.w3.org/1999/xlink"
                                                               xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32" width="100%" height="100%"><path
                    d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    class="path1"></path></svg>
                </use></svg>
              </span>
                  <span>{{arr5.rating}}</span>
                  <span>月售{{arr5.recent_order_num}}</span>
                </div>
                <div class="wfr-Place-order1">
                  <span class="wfr-Place-sapn1">蜂鸟专送</span>
                  <span class="wfr-Place-sapn2">准时达</span>
                </div>
              </div>
              <div class="wfr-business-rmb">
                <div class="wfr-business-rmb1">￥20起送/配送费约￥5</div>
                <div class="wfr-business-rmb2">
                  <span class="wfr-business-sapn1">{{arr5.tips}}</span>
                  <span class="wfr-business-sapn1">{{arr5.distance}} /</span>
                  <span class="wfr-business-sapn2">{{arr5.order_lead_time}}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from "vue"
  // import Swiper from 'swiper'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  var api5 = "http://cangdu.org:8001/v2/index_entry";
  var api6 = `http://cangdu.org:8001/shopping/restaurants?latitude=${this.citydata}&longitude=${this.citydata1}`
  export default {
    name: "shop",
    data() {
      return {
        location: "",
        locabusiness: "",
        citydata: "",
        citydata1: "",
        imgdata: null,
        wfrarr1: [],
        wfrarr2: [],
        num:"",
        num1:'',
        num2:'',
        imgurl: "//elm.cangdu.org/img/",
        wfrhttp: "https://fuss10.elemecdn.com",
        swiperOption: {
          loop: true,
        },
        swiperSlidesData: []
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    created(){
      this.location = this.$route.query.name
      this.citydata = this.$route.query.latitude
      this.citydata1 = this.$route.query.longitude
      console.log(this.$route.query)
      this.axios.get(api5).then((respoent) => {
        this.imgdata = respoent.data;
        this.wfrarr1 = this.imgdata.slice(0, 8);
        this.wfrarr2 = this.imgdata.slice(8, 16);
        // console.log(this.wfrarr1[0].image_url)
        this.swiperSlidesData.push(this.wfrarr1,this.wfrarr2)
      })
      this.axios.get(api6).then((responent) => {
        this.locabusiness = responent.data
        // console.log(responent.data)
      })
    },
    methods:{
      wfrMerchant(arr5){
        this.num = arr5
        console.log(this.num)
        this.$router.push({name:'Businesstore',query:{id:this.num}})
      },
      wfrOnclick1(id){
        this.num1 = id
        console.log(this.num1)
        this.$router.push({name:'FoodDetails',parmas:{id:this.num1}})
      },
      wfrOnclick2(id){
        this.num2 = id
        this.$router.push({name:'FoodDetails',parmas:{id:this.num2}})
      },
    }
  };
</script>
<style scoped>
  .wfr-business-rmb{
    overflow: hidden;
  }
  .wfr-business-rmb1{
    transform: scale(0.85);
    color:#666;
    font-size: 0.3rem;
    float: left;
  }
  .wfr-business-rmb2{
    transform: scale(0.85);
    font-size: 0.3rem;
    float: right;
    color: #3190e8;
  }
  .wfr-business-sapn2{
    font-size: 0.3rem;
    margin-right: 0.6rem;
  }
  .wfr-business-sapn1{
    color:#666;
    font-size: 0.3rem;
  }
  .wfr-Place-order-float{
    overflow: hidden;
    margin: 0.5rem 0;
  }
  .wfr-Place-sapn2{
    font-size: 0.3rem;
    color: #3190e8;
    border: .025rem solid #3190e8;
  }
  .wfr-Place-sapn1{
    font-size: 0.3rem;
    color: #fff;
    background-color: #3190e8;
    border: .05rem solid #3190e8;
  }
  .wfr-Place-order1{
    transform: scale(0.7);
    float: right;
  }
  .wfr-Place-order{
    font-size: 0.35rem;
    float: left;
  }
  .wfr-locabusiness-name {
    color: black;
    font-size: 0.67rem;
  }

  .wfr-left {
    float: left;
  }

  .wfr-locabusiness-list {
    padding: 0.7rem 0;
    border-bottom: 1px solid #f1f1f1;
    overflow: hidden;
  }

  .wfr-locabusiness-tt {
    overflow: hidden;
  }

  .supports {
    font-size: .5rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    border-radius: .08rem;
    margin-left: .05rem;
    font-size: .5rem;
    padding: 0 .04rem;
    margin-left: .05rem;
  }

  .shop_detail_ul {
    width: 3rem;
    transform: scale(.7);
    float: right;
  }

  .wfr-business-info {
    width: 76%;
    float: left;
  }

  .grey_fill {
    fill: #ff9a0d;
    width: 0.3rem;
    height: 0.3rem;
  }

  .wfr-business-bs {
    display: block;
    float: left;
    margin-left: 0.5rem;
  }

  .wfr-locabusiness-text {
    font-size: .5rem;
    line-height: .6rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }

  .body1 {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }

  .wfr-logo-location {
    display: flex;
    justify-content: space-around;
    background-color: #3190e8;
    width: 100%;
    height: 1.95rem;
    line-height: 1.95rem;
  }

  .wfr-logo-seach {
    color: #fff;
    font-size: 1rem;
  }

  .wfr-icon-list {
    width: 8rem;
    color: #fff;
    font-weight: 200;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .wfr-icon-li {
    color: #fff;
  }

  .path1 {
    color: #fff;
  }

  .path2 {
    fill: #fff;
    margin-top: 0.4rem;
    margin-left: 0.4rem;
    width: 1.8rem;
    height: 1.1rem;
    line-height: 1.95rem;
  }

  .wfr-luobo {
    width: 100%;
    position: relative;
    border-bottom: 1px solid #f1f1f1;
  }

  .wfr-lunobo-ul1 {
    padding-top: 0.4rem;
    width: 100%;
    background-color: white;
    text-align: center;
    display: flex;
    justify-content: space-around;
    justify-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #ccc;
  }

  .wfr-lunobo-list {
    padding-top: 0.1rem;
    padding-bottom: 0.2rem;
    width: 25%;
  }

  .wfr-lunobo-list img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .wfr-lunbo-text {
    font-weight: 200;
    padding-top: 0.2rem;
    padding-bottom: 0.7rem;
    font-size: .55rem;
    color: #666;
  }

  .wfr-Circular2 {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 10rem;
  }

  .shop_icon {
    fill: #999;
    margin-left: .6rem;
    vertical-align: middle;
    width: .6rem;
    height: .6rem;
  }

  .wfr-business {
    color: #999;
    font-size: 0.55rem;
  }

  .wfr-city-business {
    margin-top: 0.5rem;
    border-top: 1px solid #f9f9f9;
    width: 100%;
    background-color: #fff;
  }

  .wfr-locabusiness-img {
    width: 2.7rem;
    height: 2.7rem;
    margin-right: .4rem;
  }
  .wfr-city-business-loca{
    padding-top: 0.4rem;
    margin-bottom:0.6rem;
    border-top: 1px solid #ccc;
  }
</style>
