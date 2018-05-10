<template>
    <div class="ttx_nine">
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
          <span class="ttx_title_text">会员说明</span>
        </section>
      </header>
      <h3>尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 > 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。 ### Q1: 特权介绍 * 身份标识：饿了么会员服务有效期内，享有专属皇冠标识。 * 减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。 * 更多特权，敬请期待！ ### Q2: 资费介绍 * 饿了么会员卡：20元 ### Q3: 使用说明 当用户满足以下任一条件，会员服务自动失效： 1. 自绑定之日起超过31天； 2. 在31天内累计使用减免配送费的蜂鸟订单数量达到30单； ### Q4: 购卡说明 * 在线购买：饿了么App>我的>饿了么会员卡 ### Q5: 温馨提示 * 用户在当前会员服务失效前，无法购买新卡。 * 请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</h3>
    </div>
</template>

<script>
    export default {
        name: "nine"
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
    padding: 1rem;
    font-size: .85rem;
    line-height: 1.5;

  }
</style>
