<template>
    <div class="ttx_Fifteen">
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
          <span class="ttx_title_text">免责声明</span>
        </section>
      </header>
      <h4>
        新用户是根据设备、饿了么账号、下单手机号进行判断，如果您下单时以上信息均为首次使用则符合饿了么定义的新用户 * 仅限新用户使用移动端app提交订单并选择在线支付时享受（饿配送订单选择餐到付款也可享受） * 在本设备上曾经有过购买记录行为的手机不能参加本活动 * 新用户首单立减金额各区域不同 * 活动仅支持手机客户端最新版本
      </h4>
    </div>
</template>

<script>
    export default {
        name: "fifteen"
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
  h4{
    margin-top: 2rem;
    padding: .4rem;
    font-size: .7rem;
    line-height: 1.5;
  }
</style>
