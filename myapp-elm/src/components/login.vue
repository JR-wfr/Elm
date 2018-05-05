<template>
  <div id="app">
    <!--顶部-->
    <header id="ttx_head_top">
      <section class="ttx_head_goback">
        <!--图标-->
        <svg class="ttx_head_sev"   xmlns="http://www.w3.org/2000/svg" version="1.1">
          <a href="http://localhost:8080/#/">
            <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255);stroke-width: 2px;">
            </polyline>
          </a>

        </svg>
        <span  class="ttx_title_text">密码登录</span>

      </section>

    </header>
    <!--from表单-->
    <form class="ttx_loginForm">
      <div class="ttx_input_container">
        <input  class="ttx_index1" type="text" placeholder="账号">
      </div>
      <div class="ttx_input_container">
        <input class="ttx_index1" type="text" placeholder="密码">
        <el-switch class="ttx_switch"
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>

      </div>
      <div class="ttx_input_container">
        <input class="ttx_index1" type="text" placeholder="验证码">
      </div>
    </form>
    <p class="ttx_login_tips">
      温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p class="ttx_login_tips">

      注册过的用户可凭账号密码登录

    </p>

    <div class="ttx_login_container">登录</div>

    <a  class="ttx_to_forget" href="">重置密码</a>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        value1: false,
        value2: true,
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
    position: relative;
    height: .195rem;
  }
  .ttx_head_goback .ttx_title_text {
    position: absolute;
    left: 0;
    right: 0;
    height: 1.95rem;
    width: 100%;
    line-height: 1.95rem;
    top: 0;
    text-align: center;
  }

  #ttx_head_top {
    overflow: hidden;
    background-color: #3190e8;
    /*position: fixed;*/
    /*z-index: 100;*/
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
    padding: 0;
    margin: 0;
    border: none;
    color: #333;
  }

  .ttx_head_sev {
    float: left;
    height: 1rem;
    /*position: absolute;*/
    margin-top: .4rem;
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
    border-bottom: 1px solid #f1f1f1;
    position: relative;
  }

  .ttx_input_container input{
    /*display: block;*/

    padding: 0rem;
    margin: 0px;
    border: none;
    color: #333;
    height: 1.5rem;
    outline: none;
  }



  .ttx_index1 {
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
  /*.ttx_button_switch{*/
    /*background-color: #ccc;*/
    /*display: -ms-flexbox;*/
    /*display: flex;*/
    /*-ms-flex-pack: center;*/
    /*justify-content: center;*/
    /*width: 2rem;*/
    /*height: .7rem;*/
    /*padding: 0 .2rem;*/
    /*border: 1px;*/
    /*border-radius: .5rem;*/
    /*position: relative;*/
  /*}*/

  .ttx_switch{
    position: absolute;
    right: 1rem;
    top: .3rem;
  }



</style>
