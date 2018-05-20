<template>
<div class="exchange">
  <header class="ttx_head_top">
    <section class="ttx_head_goback">
      <router-link to="/discount">
        <svg class="ttx_head_sev">
          <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2px;">
          </polyline>
        </svg>
      </router-link>
    </section>
    <section class="ttx_title_head_ellipsis">
      <span class="ttx_title_text">兑换红包</span>
    </section>
  </header>
  <!--表格-->
  <form class="exchange_code">
    <input type="text" placeholder="请输入兑换码" class="exchange_input">
    <div class="input_container_captcha_code_container">
      <input v-model="wfrVm" style="font-size: .7rem" type="text" placeholder="验证码" maxlength="4" @keyup="ttxUp">
      <div class="img_change_img">
      <img id="imgs0" :src="yzm.code" alt="">
        <div class="change_img">
         <p>看不清</p>
          <p style="color: #3b95e9; ">换一张</p>
        </div>
      </div>
    </div>
  </form>
  <div :class="[{ determine1: isActive }, {determine2:Active}]" @click="tx">兑换</div>
  <!--弹框-->
  <div v-if="show" class="alet_container">
    <div class="tip_text_container">
      <div class="tip_icon" >
        <span id="ttx_sp1"></span>
        <span id="ttx_sp2"></span>
      </div>
      <p class="tip_text">无效的验证码</p>
      <div @click="ttx_123" class="confrim">确认</div>
    </div>
  </div>

</div>

</template>

<script>
    export default {
      data(){
       return{
         yzm:"",
         wfrVm:"",
         isActive:true,
         Active:false,
         show:false
       }
      },
        name:"exchange",
      created(){
          this.axios.post('http://cangdu.org:8001/v1/captchas').then((response)=>{
            this.yzm = response.data
          })
      },
      methods:{
        ttxUp(){
          if(this.wfrVm.length == 4){
            this.isActive = false;
            this.Active = true;
          }else {
            this.isActive = true;
            this.Active = false;
          }
        },
        ttx_123(){
       this.show=false
        },
        tx(){
          this.show=true
        }
      }

    }
</script>

<style scoped>
  .determine1{
    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
  }
  .determine2{
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
  }
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
  .exchange_code{
    margin-top:2.5rem;
  }
  .exchange_input{
    width: 90%;
    margin-left: .4rem;
    font-size: .7rem;
    color: #666;
    padding: .6rem .4rem;
    border-radius: .15rem;
  }
  .input_container_captcha_code_container{
    width: 90%;
    margin-left: .4rem;
    height: 2.2rem;
    display: -ms-flexbox;
    display: flex;
    margin-top: .7rem;
    /*font-size: .7rem;*/

  }
  .img_change_img{
    display: flex;
    align-items: center;
    flex: 2;
    margin-left: .3rem;
    background-color: #fff;
    padding-left: .2rem;
    border-radius: .15rem;
  }
  .change_img{
    font-size: .4rem;
    display: flex;
    flex-wrap: wrap;
    width: 3rem;
    justify-content: center;
    margin-top: .2rem;
  }
  #imgs0{

    width: 3.5rem;
    height: 1.5rem;
    margin-right: .2rem;
  }
  .alet_container{
    width: 13rem;
    margin: 0 auto;
    position: absolute;
    top: 8.5rem;
    left: 1.4rem;
  }
  .tip_text_container{
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .tip_icon{
    width: 3rem;
    height: 3rem;
    border: .15rem solid #f8cb86;
    border-radius: 50%;
    position: revert;

  }
  #ttx_sp1{
    display: block;
    width: .12rem;
    height: 1.5rem;
    background-color: #f8cb86;
    position: absolute;
   left: 7.3rem;
    bottom: 16.6rem;


  }
  #ttx_sp2 {
    display: block;
    width: .2rem;
    height: .2rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .2rem;
    background-color: #f8cb86;
    position: absolute;
    left: 7.75rem;
    bottom: 16.1rem;
  }
  .confrim{
    font-size: .8rem;
    color: #fff;
    font-weight: 700;
    margin-top: .8rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 1.8rem;
    border: 1px;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
</style>
