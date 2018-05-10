<template>
<div class="ttx_Two">
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
      <span class="ttx_title_text">签到规则</span>
    </section>
  </header>
  <h3 id="ttx_h3">
    <p>如何签到领红包 用户需要支付 1 元参与活动（后续签到不收费）</p>

    活动期间每日签到，9 天后即可领取 10 元无门槛红包
    <br>
    如期间忘记签到，可领红包金额会减少，详细如下：
    <strong style="font-weight: 900">完成 9 天签到：</strong>
    10元（2个5元红包） -
    <strong style="font-weight: 900">漏签 1 天：</strong>
    8元（2个4元红包） -
    <strong style="font-weight: 900">漏签 2 天：</strong>
    6元（2个3元红包） -
    <strong style="font-weight: 900">漏签 3 天：</strong>
    4元（2个2元红包） -
    <strong style="font-weight: 900">漏签 4 天及以上：</strong>
    1个2元红包
    <br>
    ### 漏签后如何补签 如忘记签到，可通过下单补签，漏签当日至红包领取日前一天每1笔有效订单可补签 1 天（仅限在线支付订单），例：如您在活动第 3 天忘记签到，只要你在第 3 天至第 9 天内完成1笔有效的订单，即可完成补签。 ### 每日签到拿福利： - 签到期间，每日 10:30 可抢 5 元红包，每日限领取 1个。红包数量有限，抢完即止，要记得来早哦~

  </h3>
</div>
</template>

<script>
    export default {
        name: "two"
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
  #ttx_h3{

    padding: 1rem;
    margin-top: 2rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;

  }
  h3{
    display: block;
    font-size: .8rem;

    font-weight: bold;
  }
</style>
