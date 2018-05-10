<template>
  <div class="ttx_rating_page">
    <header class="ttx_head_top">
      <section class="ttx_head_goback">
        <router-link to="/personal">
          <svg class="ttx_head_sev">
            <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2px;">

            </polyline>
          </svg>
        </router-link>
      </section>

      <section class="ttx_title_head_ellipsis">
        <span class="ttx_title_text">服务中心</span>
      </section>
    </header>
    <!--左右客服-->
    <section class="ttx_service_connect">
      <!--左客服-->
      <div class="ttx_service_left">
        <p><img style="width: 1.5rem" src="../../assets/img/2.jpg" alt=""></p>
        <span class="ttx_t1">在线客服</span>
      </div>
      <!--右客服-->
      <div class="ttx_service_right">
        <p><img style="width: 1.5rem" src="../../assets/img/timg.jpg" alt=""></p>
        <span class="ttx_t1">在线客服</span>
      </div>
      <a href="">

      </a>
    </section>
    <!---->
    <div class="ttx_hot_questions">
      <h3 class="ttx_qustion_header">热门问题</h3>
      <ul>
        <!--one-->
        <router-link to="/one">
          <li class="ttx_question_title">
            <span>超级会员权益说明</span>
            <span class="arrpw"> > </span>
          </li>
        </router-link>
        <!--two-->
        <router-link to="/two">
          <li class="ttx_question_title">
            <span> 签到规则</span>
            <span>> </span>
          </li>
        </router-link>
        <!--three-->
        <router-link to="/three">
          <li class="ttx_question_title">
            <span>用户等级说明</span>
            <span> ></span>
          </li>
        </router-link>
        <!--four-->
        <router-link to="/four">
          <li class="ttx_question_title">
            <span>积分问题</span>
            <span> ></span>
          </li>
        </router-link>
        <!--Five-->
        <router-link to="/five">
          <li class="ttx_question_title">
            <span>教我拍大片</span>
            <span> ></span>
          </li>
        </router-link>
        <!--six-->
        <router-link to="/six">
          <li class="ttx_question_title">
            <span>支付问题</span>
            <span> ></span>
          </li>
        </router-link>
        <!--seven-->
        <router-link to="/seven">
          <li class="ttx_question_title">
            <span>其他问题</span>
            <span> ></span>
          </li>
        </router-link>
        <!--eight-->
        <router-link to="/eight">
        <li class="ttx_question_title">
          <span>准时达问题</span>
          <span> ></span>
        </li>
        </router-link>
        <!--Nine-->
        <router-link to="/nine">
        <li class="ttx_question_title">
          <span>会员说明</span>
          <span> ></span>
        </li>
        </router-link>
        <!--Ten-->
        <router-link to="/ten">
        <li class="ttx_question_title">
          <span>会员问题</span>
          <span> ></span>
        </li>
        </router-link>
        <!--Eleven-->
        <router-link to="/eleven">
        <li class="ttx_question_title">
          <span>红包问题</span>
          <span> ></span>
        </li>
        </router-link>
        <!--Twelve-->
        <router-link to="/twelve">
        <li class="ttx_question_title">
          <span> 活动细则</span>
          <span> ></span>
        </li>
        </router-link>
        <!--Thirteen-->
        <router-link to="/thirteen">
        <li class="ttx_question_title">
          <span>补签规则</span>
          <span> ></span>
        </li>
        </router-link>
        <li class="ttx_question_title">
          <span> 优惠说明</span>
          <span> ></span>
        </li>
        <li class="ttx_question_title">
          <span>免责声明</span>
          <span> ></span>
        </li>
        <li class="ttx_question_title">
          <span>代金券说明</span>
          <span> ></span>
        </li>
        <li class="ttx_question_title">
          <span>商务合作</span>
          <span> ></span>
        </li>
        <li class="ttx_question_title">
          <span>余额问题</span>
          <span> ></span>
        </li>
        <li class="ttx_question_title">
          <span>超赞商家</span>
          <span> ></span>
        </li>
        <li class="ttx_question_title">
          <span>匿名购买</span>
          <span> ></span>
        </li>
        <li class="ttx_question_title">
          <span>活动问题</span>
          <span> ></span>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
  export default {
    name: "service"
  }
</script>

<style scoped>
   li span:nth-child(1){
    color: #333;
  }
  .ttx_rating_page {
    width: 100%;
    height: 100%;
  }

  .ttx_head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }

  .ttx_head_goback {
    left: .4rem;
    width: .6rem;
    height: 1rem;
    line-height: 2.2rem;
    margin-left: .4rem;
  }

  .ttx_head_sev {
    width: 0.8rem;
    float: left;
    height: 1rem;
    margin-top: .4rem;
    z-index: 10;
  }

  .ttx_title_head_ellipsis {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }

  .ttx_title_text {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;

  }

  .ttx_service_connect {
    margin-top: 2rem;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid red;
  }

  .ttx_service_left {
    width: 50%;
    height: 3.5rem;
    float: left;
    background: white;
    text-align: center;
    padding-top: 1rem;

  }

  .ttx_service_right {
    width: 49.6%;
    height: 3.5rem;
    float: right;
    border-left: 1px solid #f5f5f5;
    background: white;
    text-align: center;
    padding-top: 1rem;
  }

  .ttx_t1 {
    margin-top: .4rem;
    font-size: .6rem;
    color: #666;
  }

  /*.el-icon-phone{*/
  /*width: 2rem;*/
  /*}*/
  .ttx_qustion_header {
    font-size: .75rem;
    color: #333;
    line-height: 3rem;
    border-bottom: 1px solid #f5f5f5;
    padding-left: .7rem;
  }

  .ttx_question_title {
    padding: 0 .7rem;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }
</style>
