<template>
  <div class="ttx_all">
    <!--<div class="ttx_profile_page">-->
      <!--蓝色区域-->
      <header class="ttx_head_top">
        <section class="ttx_head_goback">
          <svg class="ttx_head_sev" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255);stroke-width: 2px;">
            </polyline>
          </svg>
        </section>
        <section class="ttx_head_ell">
          <span class="ttx_title_text">我的</span>

        </section>
      </header>
      <!--<div style="height: 105%;padding-top:0rem;">-->
      <div>
        <div class="ttx_profile-number">
          <a class="ttx_profile_link" href="">
            <div class="ttx_portrait"><img id="ttx_imgs" src="../../assets/img/1.png" alt=""></div>
            <div class="ttx_user-info">
              <p>登录/注册</p>
              <p>
              <span class="el-icon-mobile-phone">
                <span>暂无绑定手机号</span>
              </span>
              </p>
            </div>
            <span id="ttx_arrow"> > </span>
          </a>
        </div>
        <!--三个框-->
        <div class="Grid">
          <div class="Grid-cell">
            <ul class="ttx_clear">
              <li class="ttx_info-data-link">
                <span class="info-data-top"><b id="ttx_blue">0.00</b>元</span>
                <span class="info-data-bottom">我的余额</span>
              </li>
            </ul>
          </div>
          <!--第二个框-->
          <div class="Grid-cell">
            <ul class="ttx_clear">
              <li class="ttx_info-data-link">
                <span class="info-data-top"><b id="ttx_red">0</b>个</span>
                <span class="info-data-bottom">我的优惠</span>
              </li>
            </ul>
          </div>
          <!--第三个框-->
          <div class="Grid-cell">
            <ul class="ttx_clear">
              <li class="ttx_info-data-link">
                <span class="info-data-top"><b id="ttx_green">0</b>分</span>
                <span class="info-data-bottom">我的积分</span>
              </li>
            </ul>
          </div>
        </div>
        <!--我的订单,积分商城,饿了么会员-->
        <div class="ttx_profile-1reTe">
          <!--1-->
          <router-link to="/order">
          <a class="ttx_myorder" href="###">
            <div class="el-icon-tickets"></div>
            <div class="ttx_myorder-div"><span>我的订单</span></div>
          </a>
          </router-link>
          <!--2-->
          <router-link to="/integral">
          <a class="ttx_myorder" href="##">
            <div class="el-icon-date"></div>
            <div class="ttx_myorder-div"><span>积分商城</span></div>
          </a>
          </router-link>
          <!--3-->
          <router-link to="/VIP">
          <a class="ttx_myorder" href="##">
            <div class="el-icon-star-off"></div>
            <div class="ttx_myorder-div"><span>饿了么会员卡</span></div>
          </a>
          </router-link>
        </div>
        <!--服务中心,下载饿了么app-->
        <div class="ttx_profile-1reTe">
          <!--服务中心-->
          <router-link to="/service">
          <a class="ttx_myorder" href="##">
            <div class="el-icon-picture"></div>
            <div class="ttx_myorder-div"><span>服务中心</span></div>
          </a>
          </router-link>
          <!--下载app-->
          <a class="ttx_myorder" href="##">
            <div class="el-icon-upload"></div>
            <div class="ttx_myorder-div"><span>下载饿了么APP</span></div>

          </a>
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
      }
    },
    created() {
      this.value1 = this.$route.params.name
      console.log(this.value1)
    },
    components:{
    }
  }
</script>

<style scoped>
  .ttx_all {
    width: 100%;
    height: 100%;
    background: rgb(245, 245, 245);
  }

  .ttx_head_top {
    background-color: #3190e8;
    width: 100%;
    height: 1.95rem;
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
    margin-left: 10rem;
    transform: translate(-50%, -50%);
    color: #fff;
    /*text-align: center;*/
  }

  .ttx_portrait {
    background: #3190e8;
    float: left;
  }

  .ttx_profile_link {
    /*margin-top: 1.9rem;*/
    display: block;
    background: #3190e8;
    overflow: hidden;
    position: relative;

  }

  #ttx_imgs {
    width: 2.5rem;
    border-radius: 50%;
    margin-left: 1rem;
  }

  .ttx_user-info {
    font-weight: 700;
    font-size: .8rem;
    color: #fff;

    padding: .6rem;
    margin-left: 3rem;

  }

  .el-icon-mobile-phone {
    font-size: 12px;
    margin-top: .7rem;
  }

  .ttx_user-info p {
    margin-left: .7rem;
  }

  #ttx_arrow {
    position: absolute;
    top: 1rem;
    left: 15rem;
    color: white;
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

  #ttx_blue {
    display: inline-block;
    font-size: 1.2rem;
    color: #f90;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue, Tahoma;

  }

  #ttx_red {
    display: inline-block;
    font-size: 1.2rem;
    color: red;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue, Tahoma;
  }

  #ttx_green {
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
    width: 14.3rem;
    display: flex;
    padding-left: 1.6rem;
    background: white;

  }

  .el-icon-tickets {
    border-bottom: 1px solid #f1f1f1;
    padding: .39rem .266667rem .433333rem 0;
  }

  .el-icon-date {
    color: red;
    border-bottom: 1px solid #f1f1f1;
    padding: .39rem .266667rem .433333rem 0;
  }

  .el-icon-star-off {
    color: gold;

    border-bottom: 1px solid #f1f1f1;
    padding: .39rem .266667rem .433333rem 0;

  }

  .ttx_myorder-div {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding: .433333rem .266667rem .433333rem 0;
    font-size: .7rem;
    color: #333;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .el-icon-picture {
    color: #3190e8;
    border-bottom: 1px solid #f1f1f1;
    padding: .39rem .266667rem .433333rem 0;
  }

  .el-icon-upload {
    color: #3190e8;
    border-bottom: 1px solid #f1f1f1;
    padding: .39rem .266667rem .433333rem 0;
  }

  .foot_guide {
    background-color: #fff;
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
