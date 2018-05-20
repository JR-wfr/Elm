<template>
  <div class="ttx_all">
      <header class="ttx_head_top">
        <section class="ttx_head_goback">
          <router-link to="/personal">
          <svg class="ttx_head_sev" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255);stroke-width: 2px;">
            </polyline>
          </svg>
          </router-link>
        </section>
        <section class="ttx_head_ell">
          <span class="ttx_title_text">我的</span>
        </section>
      </header>
      <div>
        <div class="ttx_profile-number">
          <div class="ttx_profile1">
            <div  v-if="ttobj1.phone==''"class="ttx_portrait">
              <img class="ttx_imgs" src="../../assets/img/1.png" alt="">
            </div>
            <div v-else class="ttx_portrait">
              <img class="ttx_imgs" src="../../assets/img/2.jpg" alt="">
            </div>


            <div class="ttx_user-info">
              <div v-if="ttobj1.phone==''">
                <p class="ttx_user-info-p">登录/注册</p>
                <p class="ttx_user-info-p1">
                  <svg t="1526807466859" class="icon333" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3307" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128"><path d="M704 128v768H320V128h384m0-64H320c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64zM272 192v64h480v-64H272z m0 576h480v-64H272v64z m176 96h128v-64H448v64z" p-id="3308" fill="#ffffff"></path></svg>
                  <span class="icon334">暂无绑定手机号</span>
                </p>
              </div>
              <div v-else>
                <p class="ttx_user-info-p">{{ttobj1.phone}}</p>
                <p class="ttx_user-info-p1">
                  <svg t="1526807466859" class="icon333" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3307" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128"><path d="M704 128v768H320V128h384m0-64H320c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64zM272 192v64h480v-64H272z m0 576h480v-64H272v64z m176 96h128v-64H448v64z" p-id="3308" fill="#ffffff"></path></svg>
                  <span class="icon334">暂无绑定手机号</span>
                </p>
              </div>
              <p @click="ttxDD">
                <svg t="1526808122301" class="icon6666" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="967" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128"><path d="M492.675886 904.817574L885.696074 511.797385 492.675886 118.777197c-12.258185-12.258185-12.432147-32.892131 0.187265-45.51052 12.707416-12.707416 32.995485-12.703323 45.511543-0.187265l411.660734 411.660734c7.120165 7.120165 10.163477 17.065677 8.990768 26.624381 1.500167 9.755178-1.5104 20.010753-8.990768 27.491121L538.374694 950.515359c-12.258185 12.258185-32.892131 12.432147-45.511543-0.187265-12.707416-12.707416-12.703323-32.995485-0.187265-45.51052z" p-id="968" fill="#ffffff"></path></svg>
              </p>
            </div>
          </div>
        </div>
        <div>
          <!--三个框-->
          <div class="Grid">
            <div class="Grid-cell">
              <ul class="ttx_clear">
                <!--余额-->
                <router-link to="/balance">
                  <li class="ttx_info-data-link">
                    <span class="info-data-top">
                      <b v-if="ttobj1.phone !=''" id="ttx_blue1">10000</b>
                      <b v-else id="ttx_blue">0.00</b>
                      元</span>
                    <span class="info-data-bottom">我的余额</span>
                  </li>
                </router-link>`
              </ul>
            </div>
            <!--第二个框-->
            <div class="Grid-cell">
              <ul class="ttx_clear">
                <router-link to="/discount">
                  <li class="ttx_info-data-link">
                    <span class="info-data-top">
                      <b v-if="ttobj1.phone !=''" class="ttx_red">5</b>
                      <b v-else class="ttx_red">0</b>
                      个</span>
                    <span class="info-data-bottom">我的优惠</span>
                  </li>
                </router-link>
              </ul>
            </div>
            <!--第三个框-->
            <div class="Grid-cell">
              <ul class="ttx_clear">
                <router-link to="/mypoints">
                  <li class="ttx_info-data-link">
                    <span class="info-data-top">
                      <b v-if="ttobj1.phone !=''" class="ttx_green">35</b>
                      <b v-else class="ttx_green">0</b>
                      分</span>
                    <span class="info-data-bottom">我的积分</span>
                  </li>
                </router-link>
              </ul>
            </div>
          </div>
          <!--我的订单,积分商城,饿了么会员-->
          </div>
        </div>
      <div class="ttx-mmmmm">
        <div class="ttx_profile-1reTe">
          <!--1-->
          <div class="ttx_myorder1">
            <router-link class="ttx_myorder" to="/order">
              <div style="transform: scale(1.3)" class="el-icon-tickets"></div>
              <div class="ttx_myorder-div ttx_myorder-div1"><span>我的订单</span></div>
            </router-link>
          </div>
          <!--2-->
          <div class="ttx_myorder1">
            <router-link class="ttx_myorder" to="/integral">
              <div style="transform: scale(1.3)" class="el-icon-date"></div>
              <div class="ttx_myorder-div ttx_myorder-div1"><span>积分商城</span></div>
            </router-link>
          </div>

          <!--3-->
          <div class="ttx_myorder1">
            <router-link class="ttx_myorder" to="/VIP">
              <div style="transform: scale(1.4)" class="el-icon-star-off"></div>
              <div class="ttx_myorder-div"><span>饿了么会员卡</span></div>
            </router-link>
          </div>

        </div>
        <!--服务中心,下载饿了么app-->
        <div class="ttx_profile-1reTe">
          <!--服务中心-->
          <div class="ttx_myorder1">
            <router-link class="ttx_myorder" to="/service">
              <div style="transform: scale(1.3)" class="el-icon-picture"></div>
              <div class="ttx_myorder-div ttx_myorder-div1"><span>服务中心</span></div>
            </router-link>
          </div>
          <!--下载app-->
          <div class="ttx_myorder1">
            <router-link class="ttx_myorder" to="/download">
              <div class="el-icon-upload" style="transform: scale(1.3)"></div>
              <div class="ttx_myorder-div"><span>下载饿了么APP</span></div>
            </router-link>
          </div>
      </div>
  </div>
  </div>
</template>
<script>
  export default {
    name: "personal",
    data() {
      return {
        value1: "",
        ttobj1:{
          phone:"",
        },
        ttobj2:{},
      }
    },
    created() {
      this.value1 = this.$route.params.name;
      this.ttobj2 = JSON.parse(localStorage.getItem('key'));
      if (this.ttobj2 != ""){
          this.ttobj1.phone = this.ttobj2.phone
      }
      console.log(this.ttobj1.phone)

    },
    methods:{
      ttxDD(){
        if (this.ttobj1.phone != ""){
          this.$router.push({name:"Info"})
        }else{
          this.$router.push({name:"login"})
        }
      }
    }
  }
</script>
<style scoped>
  .ttx-mmmmm{
    padding-left:5%;
    background-color: white;
  }
  .icon6666{
    width: 0.9rem;
    height: 0.9rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  #ttx_arrow {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 1rem;
    left: 15rem;
    color: white;
  }
  .icon334{
    width: 5rem;
    font-size: 0.7rem;
    margin-bottom: 2rem;
    position: absolute;
    top: -.3rem;
    left: 1rem;
  }
  .icon333{
    width:1rem;
    height: 1rem;
    transform: scale(1.1);
  }
  .ttx_user-info-p1{
    -webkit-font-smoothing: antialiased;
    font-size: 0.7rem;
    position: absolute;
    left: 3.8rem;
    top: 1.6rem;
  }
  .ttx_user-info-p{
    font-size: 0.85rem;
    position: absolute;
    left: 4rem;
  }
  .ttx_user-info {
    color: white;
    line-height: 2rem;
    position: relative;
  }
  .ttx_profile1 img{
    width: 3.1rem !important;
  }
  .ttx_profile1{
    margin-top: .8rem;
  }
  .ttx_profile-number{
    height: 5rem;
    line-height: 5rem;
    background: #3190e8;
    overflow: hidden;
  }
  .el-icon-tickets{
    line-height: 1.4rem;
  }
  .el-icon-date{
    line-height: 1.4rem;
  }
  .el-icon-star-off{
    line-height: 1.4rem;
  }
  .el-icon-upload,.el-icon-picture{
    margin-top: 0.4rem;
  }
  .ttx_myorder1{
    width:100%;
    height: 2.5rem!important;
    line-height: 1rem;
    background-color: white!important;
  }
  .ttx_myorder-div{
    margin-left: 0.3rem;
  }
  .ttx_myorder-div span{
    line-height: 1.5rem;
    font-size: 0.75rem;
    margin-left: 0.2rem;
  }
  .ttx_myorder-div1{
    height: 1.5rem;
    line-height: 1.5rem;
    padding-left: 0.3rem;
    font-size: 0.8rem !important;
    border-bottom: 1.5px solid #f1f1f1;
  }
  .ttx_myorder1{
    width: 100%;
    height: 2rem;
    background-color: white;
  }
  .ttx_all {
    width: 100%;
    height: 100%;
    background: rgb(245, 245, 245);
  }

  .ttx_head_top {
    background-color: #3190e8;
    width: 100%;
    height: 1.95rem;
    border-bottom:0.1px solid #f5f5f5;
    -webkit-font-smoothing: antialiased;
  }

  .ttx_head_goback {
    left: .4rem;
    width: .6rem;
    height: 1rem;
    line-height: 2.2rem;
    margin-left: .4rem;
    background: #3190e8;
  }

  .ttx_head_sev {
    width: 100%;
    height: 100%;
  }

  .ttx_head_ell {
    display: inline-block;
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: 0.9rem;
    position: absolute;
    top: 0.5rem;
  }

  .ttx_portrait {
    float: left;
  }
  .ttx_profile_link {
    display: block;
    overflow: hidden;
    position: relative;

  }

  .ttx_imgs {
    width: 2.5rem;
    border-radius: 50%;
    margin-left: 1rem;
  }


  .el-icon-mobile-phone {
    font-size: 12px;
    margin-top: .7rem;
  }

  .ttx_user-info p {
    margin-left: .7rem;
  }

  .Grid {
    background-color: white;
    display: flex;
  }

  .Grid-cell {
    flex: 1;
  }

  .ttx_info-data-link {
    text-align: center;
    border-right: 1px solid #f1f1f1;
  }

  .info-data-bottom {
    display: block;
    font-size: .55rem;
    color: #333;
    padding: .2rem 0 .453333rem;
  }

  .info-data-top {

    display: block;
    font-size: .55rem;
    color: #333;
    padding: .853333rem 0 .453333rem;
  }

  #ttx_blue1 {
    display: inline-block;
    font-size: 1.2rem;
    color: #f90;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue, Tahoma;

  }
  #ttx_blue {
    display: inline-block;
    font-size: 1.2rem;
    color: #f90;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue, Tahoma;

  }

  .ttx_red {
    display: inline-block;
    font-size: 1.2rem;
    color: red;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue, Tahoma;
  }

  .ttx_green {
    display: inline-block;
    font-size: 1.2rem;
    color: green;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue, Tahoma;
  }

  /*订单,商城,会员*/
  .ttx_profile-1reTe {
    margin-top: .4rem;
  }
  .ttx_myorder {
    width: 100%;
    display: flex;
    background: white;
  }

  .el-icon-tickets {
    padding: .39rem .266667rem .433333rem 0;
  }

  .el-icon-date {
    color: red;
    padding: .39rem .266667rem .433333rem 0;
  }

  .el-icon-star-off {
    color: gold;
    padding: .39rem .266667rem .433333rem 0;
  }

  .ttx_myorder-div {
    width: 100%;
    padding: .433333rem .266667rem .5rem 0;
    font-size: .7rem;
    color: #333;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .el-icon-picture {
    color: #3190e8;
    padding: .39rem .266667rem .433333rem 0;
  }

  .el-icon-upload {
    color: #3190e8;
    padding: .39rem .266667rem .433333rem 0;
  }

  .foot_guide {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 1.95rem;
    display: -ms-flexbox;
    display: flex;
    /*box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);*/
  }
  .ttx_guide_item {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
  }

  .ttx_allicon_style span {
    font-size: .45rem;
    color: #666;
  }

</style>
