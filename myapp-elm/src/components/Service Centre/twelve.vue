<template>
<div class="ttx_twelve">
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
      <span class="ttx_title_text">活动细则</span>
    </section>
  </header>
  <h3>
    会员权益调整 尊敬的用户，随着会员服务体系优化，「蜂鸟专送」商家得到大规模普及，大大丰富了会员用户的用餐选择，从2016年9月1日开始，新购及续费的会员服务将由免配送费调整为每单最高减免4元配送费，之前购买的会员服务不受影响，感谢您的支持！敬请期待更多会员特权。 ### Q1: 特权介绍 * 减配送费：饿了么会员卡绑定账户，每日前3单在「蜂鸟专送」标识商家可减配送费，每单最高可减4元。 * 更多特权，敬请期待！ ### Q2: 会员资费 * 月卡20元（一个月按31天计算） ### Q3: 购卡说明 * 在线购买：饿了么App > 我的 > 饿了么会员卡。 * 请认准饿了么官方认证渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。
  </h3>
</div>
</template>

<script>
    export default {
        name: "twelve"
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
  h3{
    padding: .4rem;
    margin-top: 2rem;
    font-size: .7rem;
    line-height: 1.5;

  }
</style>
