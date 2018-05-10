<template>
    <div class="ttx_eight">
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
          <span class="ttx_title_text">准时达问题</span>
        </section>
      </header>
      <h3>Q1: 准时达规则： 饿了么用户在饿了么App带有「准时达」标签的商家下单，若商品送达时间超过承诺送达时间10分钟，我们将为您赔付一个无门槛红包。 ### Q2: 关于准时达的特殊情况： a. 预订单暂不参加赔付； b. 夜间部分时段下单暂不参加赔付； c. 恶劣天气（雨、雪等）暂不参加赔付； d. 每位用户每天最多赔付3个红包； ### Q3: 常见问题Q&A Q1：我怎么收到赔付红包？ A1：当确认送达商品时已超过承诺送达时间10分钟，我们将向您的饿了么账户发放一个无门槛红包，同时会有短信通知到您的手机号码。 ### 饿了么保留法律允许范围内对活动的解释权</h3>
    </div>
</template>

<script>
    export default {
        name: "eight"
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
    padding: .2rem;
    line-height: 1.5;
    font-size: .85rem;
  }
</style>
