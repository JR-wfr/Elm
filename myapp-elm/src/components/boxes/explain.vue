<template>
<div>
  <header class="ttx_head_top">
    <section class="ttx_head_goback">
      <router-link to="/balance">
        <svg class="ttx_head_sev">
          <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2px;">

          </polyline>
        </svg>
      </router-link>
    </section>
    <section class="ttx_title_head_ellipsis">
      <span class="ttx_title_text">我的余额</span>
    </section>
  </header>
 <div class="ttx_markdown">
   <h3 id="q1">Q1: 使用余额的条件</h3>
   <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
    <h3 id="q2">   Q2: 余额可以怎么用？</h3>
   <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
   <h3 id="q3">Q3:我要如何提现？</h3>
   <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
   <h3 id="q4">Q4:为什么会提现失败？</h3>
   <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
 </div>
</div>
</template>

<script>
    export default {
        name: "explain"
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
  .ttx_markdown{
   margin-top: 2rem;
    line-height: 1.5;
    font-size: .75rem;
    padding: .4rem;
  }
</style>
