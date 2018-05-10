<template>
<div class="ttx_sixteen">
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
      <span class="ttx_title_text">代金券说明</span>
    </section>
  </header>
  <h3>
    如何补签？ 如忘记签到，可通过下单补签，漏签当日至红包领取日前一天每1笔有效订单可补签 1 天（仅限在线支付订单），例：如您在活动第 3 天忘记签到，只要你在第 3 天至第 9 天内完成1笔有效的订单，即可完成补签。
  </h3>
</div>
</template>

<script>
    export default {
        name: "sixteen"
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
    margin-top: 2rem;
    padding: .4rem;
    font-size: .74rem;
    line-height: 1.5;
  }
</style>
