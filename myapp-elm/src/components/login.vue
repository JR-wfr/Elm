<template>
  <div id="app">
    <!--顶部-->
    <header id="ttx_head_top">
      <section class="ttx_head_goback">
        <!--图标-->
        <router-link to="/" style="margin-left: 0.5rem;">
          <svg class="ttx_head_sev"   xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255);stroke-width: 2px;">
            </polyline>
          </svg>
        </router-link>
        <span  class="ttx_title_text">密码登录</span>
      </section>

    </header>
    <!--from表单-->
    <form class="ttx_loginForm">
      <div class="ttx_input_container">
        <div>
          <input  class="ttx_index1" type="text" placeholder="账号">
        </div>
      </div>
      <div class="ttx_input_container">
        <div>
          <input class="ttx_index1" :type="password1" placeholder="密码" v-model="value2">
          <div class="ttx_switch">
            <div class="ttx_yd" @click="tttx" v-model="value2" :style="left1"></div>
            <span class="ttx_switch1 ttx_BG1" v-if="Bgcolor"></span>
            <span class="ttx_switch2 ttx_BG2" v-else></span>
          </div>
        </div>
      </div>
      <div class="ttx_input_container">
        <div>
          <input class="ttx_index1" type="text" placeholder="验证码">
        </div>
      </div>
    </form>
    <p class="ttx_login_tips">
      温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p class="ttx_login_tips">
      注册过的用户可凭账号密码登录
    </p>
    <div class="ttx_login_container">登录</div>
    <a  class="ttx_to_forget" href="#">重置密码</a>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        value1: "",
        value2: "",
        password1:"text",
        left1:"1rem",
        Bgcolor:true,
      }
    },
    methods:{
      tttx(ev){
        if(this.password1 == "text"){
          this.password1 = "password"
          ev.target.style.left = "1rem"
          ev.target.style.transition = "all 0.3s"
          this.Bgcolor = false
        }else{
          this.password1 = "text"
          console.log(this.password1)
          ev.target.style.left = ""
          this.Bgcolor = true
        }
      }
    }
  }
</script>
<style scoped>
  #app {
    -webkit-font-smoothing: antialiased;
    background: rgb(245, 245, 245);
  }
  .ttx_head_goback {
    text-align: center;
    /*position: relative;*/
    height: 1.5rem;
  }
  .ttx_head_goback .ttx_title_text {
    height: 1.95rem;
    width: 100%;
    margin-right: 1.8rem;
    line-height: 1.95rem;
    top: 0;
    text-align: center;
  }

  #ttx_head_top {
    overflow: hidden;
    background-color: #3190e8;
    width: 100%;
    height: 1.95rem;
    padding: 0;
    margin: 0;
    border: none;
    color: #333;
  }

  .ttx_head_sev {
    width: 0.8rem;
    float: left;
    height: 1rem;
    /*position: absolute;*/
    margin-top: .4rem;
    z-index: 1000000000;
  }

  .ttx_title_text {
    color: white;
    margin-bottom: .6rem;
    margin-right: 8rem;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }

  .ttx_loginForm {
    border: none;
    color: #333;
    font-weight: 400;
    box-sizing: border-box;

  }
  .ttx_input_container {
    background-color: white;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
  }

  .ttx_input_container input{
    padding: 0rem;
    margin: 0px;
    border: none;
    color: #333;
    height: 1.5rem;
    outline: none;
  }
  .ttx_input_container div{
    margin-left: 0.75rem;
  }
  .ttx_index1 {
    padding-top: 1rem;
    width: 100%;
    height: .5rem;
    font-size: 14px
  }

  .ttx_login_tips{
    font-size: .5rem;
    color: red;
    padding: .4rem .6rem;
    line-height: .5rem;
  }
  .ttx_login_container{
    margin: 0 .5rem 1rem;
    font-size: .7rem;
    color: #fff;
    background-color: #4cd964;
    padding: .5rem 0;
    border: 1px;
    border-radius: .15rem;
    text-align: center;
  }
  .ttx_to_forget{
    float: right;
    font-size: .6rem;
    color: #3b95e9;
    margin-right: .3rem;
  }

  .ttx_switch{
    width: 1.85rem;
    height: .7rem;
    border-radius: 1.2rem;
    position: absolute;
    right: 1rem;
    top: .3rem;
  }
  .ttx_BG1{
    display: inline-block;
    width: 1.85rem;
    height: .7rem;
    margin-left: -0.2rem;
    margin-right: 0.5rem;
    background: #4cd964;
    border-radius: 1rem;
    position: absolute;

  }
  .ttx_BG2{
    margin-top: 0.1rem;
    display: inline-block;
    width: 1.85rem;
    height: .7rem;
    background: #cccc;
    border-radius: 1rem;

  }
  .ttx_switch1{
    position: absolute;
    left: .3rem;
    color: white;
    font-size: .4rem;
    margin-bottom: 1rem;
    line-height: 0.7rem;
  }
  .ttx_switch2{
    position: absolute;
    left: .1rem;
    top: -0.1rem;
    color: white;
    font-size: .7rem;
    margin-bottom: 1rem;
    line-height: 0.7rem;
  }
  .ttx_yd{
    transform: translateX(-1rem);
    width: 1.1rem;
    height: 1.1rem;
    background-color: #c1c1c1;
    border-radius: 50%;
    position: absolute;
    z-index: 3;
    top: -0.25rem;
    left: 0.25rem;
  }

</style>
