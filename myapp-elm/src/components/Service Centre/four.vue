<template>
<div class="ttx_Four">
  <header class="ttx_head_top">
    <section class="ttx_head_goback">
      <router-link to="/service">
        <svg class="ttx_head_sev">
          <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2px;">

          </polyline>
        </svg>
      </router-link>
    </section>
    <section class="ttx_title_head_ellipsis">
      <span class="ttx_title_text">积分问题</span>
    </section>
  </header>
  <h3>Q1: 怎么获得积分？ 在线支付的订单将获得订单积分奖励： * 积分将在用户完成评价后获得,会根据订单实际支付金额和评价的质量发放。 * 每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。 ### Q2: 积分用来做什么？ 可以在积分商城兑换各种礼品。 ### Q3: 礼品兑换很多天了还没有收到，该怎么办？ 礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。 ### Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？ 不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</h3>
</div>
</template>

<script>
    export default {
        name: "four"
    }
</script>

<style scoped>
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
  h3{
    margin-top: 2rem;
    padding: .3rem;
    font-size: 16px;
    line-height: 1.3;
  }
</style>
