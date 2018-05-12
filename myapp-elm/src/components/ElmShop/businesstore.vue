<template>
  <div>
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
            <span class="tip_icon" style="background-color: rgb(240, 115, 115); border-color: rgb(240, 115, 115);">减</span>
            <span>满30减5，满60减8（APP专享）</span>
          </div>
          <div class="tip_icon2">
            <router-link :to="{}">
              <span class="tip_icon2-span">1个活动</span>
              <svg class="footer_arrow"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left">
                <svg viewBox="0 0 14 14" id="arrow-left" width="100%" height="100%"><path d="M0 0 L8 7 L0 14" stroke="#fff" stroke-width="1" fill="none"></path></svg>
              </use></svg>
            </router-link>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
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
    <div class="menu_container">
      <div id="wrapper_menu">
      <ul class="ttx_ul1">
        <li class="menu_left_li_activity_menu">
          <img src="https://fuss10.elemecdn.com/5/da/3872d782f707b4c82ce4607c73d1ajpeg.jpeg" alt="">
          <span>热销榜</span>
          <span class="category_num">40</span>
        </li>
        <li class="menu_left_li">
          <img src="https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg" alt="">
          <span>优惠</span>
        </li>
        <li class="menu_left_li">
          <span>饮料</span>
        </li>
        <li class="menu_left_li">
          <span>单点</span>
        </li>
        <li class="menu_left_li">
          <span>新品</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>qqq</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
        <li class="menu_left_li">
          <span>测试</span>
        </li>
      </ul>
      </div>
      <!--right-->
      <div class="menu_right">
      <header class="">
        <div class="menu_detail_header_left">
          <strong class="menu_item_title">新品</strong>
          <span class="menu_item_description"></span>
        </div>
      </header>
      </div>
    </div>
    </div>
    <!--评价-->
    <div v-show="ttx_show2">这是评价界面</div>
  </div>
</template>

<script>
    export default {
        name: "businesstore",
        data(){
          return{
            shopid:"",
            wfrData:"",
            imgurl1: "//elm.cangdu.org/img/",
            ttx_show1:true,
            ttx_show2:false,
            ttx_show3:true,
            ttx_show4:false

          }
        },
        created(){
          this.shopid = this.$route.query.id;
          var api6 = `http://cangdu.org:8001/shopping/restaurant/${this.shopid}`
          this.axios.get(api6).then((responent)=>{
            this.wfrData = responent.data
            console.log(this.wfrData)
          })
        },
        methods:{
         ttxLy(ev){
            if (this.ttx_show3==true||this.ttx_show1==true){
              this.ttx_show1 = true;
              this.ttx_show2=false;
              this.ttx_show4 = false;
              this.ttx_show3 = true;
            }else {
              this.ttx_show1 = true;
              this.ttx_show2=false;
              this.ttx_show4 = false;
              this.ttx_show3 = true;
            }
          },
          ttxLx(){
            if (this.ttx_show2 == true||this.ttx_show1==true){
              this.ttx_show2 = true;
              this.ttx_show1=false;
              this.ttx_show3 = false;
              this.ttx_show4 = true;
            }else {
              this.ttx_show2 = true;
              this.ttx_show1=false;
              this.ttx_show3 = false;
              this.ttx_show4 = true;
            }
          }
        }

    }
</script>

<style scoped>
  #ttx_id3{
margin-top: .3rem;
  }
  #ttx_id4{
    margin-top: .3rem;
  }
  .cart_icon{
    fill: black;
    position: absolute;
    top: 17rem;
    z-index: 15;
  }
  .tip_icon{
    margin-right: 0.15rem;
  }
  .tip_icon2-span{
    color: #f1f1f1;
    font-size: 0.3rem;
    font-weight: 200;
  }
  .footer_arrow{
    width: 0.6rem;
    height: 0.6rem;
    fill: white;
    margin-bottom: 0.2rem;
    margin-left: 0.3rem;
  }
  .tip_icon2{
    float: right;
  }
  .wfr-info-logo-activity{
    width: 93%;
    position: absolute;
    top: 3.8rem;
    margin-top:0.2rem;
  }
  .wfr-info-logo-activity span{
    color: #f1f1f1;
    font-size: 0.3rem;
    font-weight: 200;
    float: left;
  }
  .wfr-info-name-p2{
    font-weight: 100;
    font-size: .3rem;
    color: #f1f1f1;
    margin: 0 0.1rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

  }
  .wfr-info-name-p1{
    margin: 0.55rem 0.1rem;
    font-weight: 100;
    font-size: .3rem;
    color: #f1f1f1;
  }
  .wfr-info-name{
    position: absolute;
    top:0.3rem;
    left: 3.5rem;
  }
  .wfr-info-name span{
    font-size: .8rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: .3rem;
  }
  .header_cover_img{

    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .wfr-info-logo{
    height: 5.2rem;
    overflow: hidden;
    position: relative;
  }
.wfr-stroe-infor{
  height: 5.2rem;
  position: relative;
  z-index: 10;
  background-color: rgba(119,103,137,.55);
  padding: .4rem 0 .4rem .4rem;
  width: 100%;
  overflow: hidden;
}
  .wfr-stroe-infor-img{
    width: 2.6rem;
    height: 2.6rem;
    border-radius: .2rem;
    position: absolute;
    top: 0.3rem;
    left: 0.5rem;
    z-index: 10;
  }
  .change_show_type{
    display: flex;
    background-color: #fff;
    padding: .3rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
    justify-content: space-around;
  }
  .activity_show{
    color: #3190e8;
    border-color: red;
  }
  .food_container{
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
  }
  .menu_container{
    display: flex;
    flex: 1;
    position: revert;
  }
  #wrapper_menu{
    width: 3.8rem;
  }
  #ttx_ul1{
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-duration: 0ms;
    transform: translate(0px, 0px) translateZ(0px);
  }
  .menu_left_li_activity_menu{
    border-left: .15rem solid #3190e8;
    background-color: #fff;
    padding: 1rem .4rem;
  }
  .menu_left_li_activity_menu img{
    width: .5rem;
    height: .6rem;
  }
  .menu_left_li_activity_menu span{
    font-size: .6rem;
    color: #666;
  }
  .category_num{
    position: absolute;
    top: .1rem;
    right: .1rem;
    background-color: #ff461d;
    line-height: .6rem;
    text-align: center;
    border-radius: 50%;
    border: .025rem solid #ff461d;
    /* min-width: .6rem; */
    /* height: .6rem; */
    /* font-size: .5rem; */
    color: #fff;
    font-family: Helvetica Neue,Tahoma,Arial;
  }
  .menu_left_li{
    padding: .7rem .3rem;
    border-bottom: .025rem solid #ededed;
    /* box-sizing: border-box; */
    border-left: .15rem solid #f8f8f8;
    position: relative;
  }
  .menu_left_li img{
    width: .5rem;
    height: .6rem;
  }
  .menu_left_li span{
    font-size: .6rem;
    color: #666;
  }
</style>
