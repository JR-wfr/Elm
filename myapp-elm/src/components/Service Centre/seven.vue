<template>
<div class="seven">
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
      <span class="ttx_title_text">其他问题</span>
    </section>
  </header>
  <h3>
    Q1: 什么是订单数 订单数是指商家最近30天的订单总数，这个数据是动态的，每天都会进行更新。 ### Q2: 商品多久内可以评价？评价后是否能修改？ * 下单确认收货后，7天内可以对商品进行评价。超过7天，评价功能自动失效。 * 美食一旦点评就不能做修改，评价不可删除撤销，请知悉。 ### Q3: 为什么提示下单次数过多，无法下单？ 在24小时内，同一手机号在同一设备上最多可以成功提交7次订单。
  </h3>
</div>
</template>

<script>
    export default {
        name: "seven"
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
    font-size: 16px;
    padding: .3rem;
    line-height: 1.5;
  }
</style>
