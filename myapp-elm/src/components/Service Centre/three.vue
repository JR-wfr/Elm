<template>
    <div class="ttx_three">
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
          <span class="ttx_title_text">用户等级说明</span>
        </section>
      </header>
      <p class="ttx_t1">用户等级是你在饿了么的身份表现，为了感谢您长期以来对饿了么的信赖和支持，我们会根据你的等级回馈相应福利和特权，功能还在内测中，暂定规则如下： ### 用户等级的划分： 用户等级按月度计算，每个自然月的最后一天会统计你当月的累计消费金额（限在线支付金额，不包含活动优惠及红包及代金券抵扣），决定你次月的等级，具体要求如下。 * Lv0 月累计消费100元以下； * Lv1 月累计消费大于等于100，小于200元 * Lv2 月累计消费大于等于200，小于500元 * Lv3 月累计消费大于等于500 ### 升级及降级规则： 每笔订单完成后，系统会自动计算你当月有效的消费金额（限在线支付金额，不包含活动优惠及红包及代金券抵扣），当月累计消费一旦达到下一等级要求，我们会立刻为您升级，您即时就可享受新等级的相关权益。<br> 如你本月累计消费金额未达到当前等级要求，次月你将被降到与本月消费相匹配的对应等级。 *内测期间饿了么会调整等级权益及规则，饿了么保留对等级体系的所有解释权</p>
    </div>
</template>

<script>
    export default {
        name: "three"
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
  .ttx_t1{
    text-align: center;
    margin-top: 2rem;
    font-size: .65rem;
    padding: .68rem;
    line-height: 1.6;

  }
</style>
