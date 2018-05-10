<template>
    <div>
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
          <span class="ttx_title_text">超赞商家</span>
        </section>
      </header>
      <h3>Q1: 什么是商家代金券？ 商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。 ### Q2: 怎么获得商家代金券？ * 进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。 * 「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。 ### Q3: 商家代金券使用条件 * 商家代金券仅限在指定商家使用 * 商家代金券仅限在线支付使用 * 每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</h3>
    </div>
</template>

<script>
    export default {
        name: "nineteen"
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
    padding: .5rem;
    font-size: .75rem;
    margin-top: 2rem;
    line-height: 1.5;
  }
</style>
