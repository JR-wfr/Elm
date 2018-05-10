<template>
    <div class="ttx_ten">
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
          <span class="ttx_title_text">会员问题</span>
        </section>
      </header>
      <h3>
        Q1: 特权介绍 * 减免配送费： 饿了么会员卡绑定账户，每日前3单在「蜂鸟专送」标识商家可减免配送费，每单最高可减免4元。 * 更多特权，敬请期待！ ### Q2: 温馨提示 * 用户在当前会员服务失效前，无法购买新卡。 * 请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。
      </h3>
    </div>
</template>

<script>
    export default {
        name: "ten"
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
    font-size: .75rem;
    padding: .4rem;
    line-height: 1.5;
  }
</style>
