<template>
  <div id="app">
    <!--顶部-->
    <header id="ttx_head_top">
      <section class="ttx_head_goback">
        <!--图标-->
        <router-link to="/" style="margin-left: 0.5rem;">
          <svg class="ttx_head_sev" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255);stroke-width: 2px;">
            </polyline>
          </svg>
        </router-link>
        <span class="ttx_title_text">密码登录</span>
      </section>

    </header>
    <!--from表单-->
    <form class="ttx_loginForm">
      <div class="ttx_input_container">
        <div>
          <input v-model="value1" class="ttx_index1" type="text" placeholder="账号">
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
          <img class="ttx_imgs" :src="pic" alt="">
          <div class="ttx_change_img" @click="yzma">
            <p style="color: #666">看不清</p>
            <p style="color: #3b95e9">换一张</p>
          </div>
        </div>
      </div>
    </form>
    <p class="ttx_login_tips">
      温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p class="ttx_login_tips">
      注册过的用户可凭账号密码登录
    </p>
    <div class="ttx_login_container" @click="ttx_456">

      <!--<router-link :to="{name:'Personal'}" @click="ttx_8888">-->
        登录
      <!--</router-link>-->

    </div>
    <a class="ttx_to_forget" href="#">重置密码</a>
<!--弹框-->
    <div class="ttx_alet">
      <section v-if="show" class="ttx_tip_container">
        <div class="ttx_tip_icon">
          <span id="ttx_span1"></span>
          <span id="ttx_span2"></span>
        </div>
        <p class="ttx_tip_text">请输入手机号/邮箱/用户名</p>

        <div @click="ttx_789" class="confrim">确认</div>
      </section>
    </div>

  </div>
</template>

<script>
  import Vue from "vue";

  let api1 = "http://cangdu.org:8001/v1/captchas"
  export default {
    name: "login",
    data() {
      return {
        value1: "",
        value2: "",
        password1: "text",
        left1: "1rem",
        Bgcolor: true,
        pic: "",
        show: false
      }
    },
    //方法
    methods: {
      tttx(ev) {
        if (this.password1 == "text") {
          this.password1 = "password"
          ev.target.style.left = "1rem"
          ev.target.style.transition = "all 0.3s"
          this.Bgcolor = false
        } else {
          this.password1 = "text"
          console.log(this.password1)
          ev.target.style.left = ""
          this.Bgcolor = true
        }
      },
      yzma() {

        var photo = document.getElementsByClassName("ttx_imgs")[0]
        Vue.axios.post(api1).then((response) => {
          console.log(response.data)
          this.pic = response.data.code
        })
        photo.src = this.pic

      },
      ttx_456(ev) {
        console.log("..............")
        if (this.value1 == "" || this.value2 == "") {
          this.show = true
        } else {
          this.show = false
          this.$router.push({name:'Personal',params:{name:this.value1}})
        }
      },
      ttx_789() {
        if (this.show == true) {
          this.show = false
        } else {
          this.show = true
        }
      },
      ttx_8888(){
        var timer = setTimeout(function () {

        },2000)
      }
    },
    created() {
      Vue.axios.post(api1).then((response) => {
        console.log(response.data)
        this.pic = response.data.code
      })
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
    margin-top: .4rem;
    z-index: 10;
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

  .ttx_input_container input {
    padding: 0rem;
    margin: 0px;
    border: none;
    color: #333;
    height: 1.5rem;
    outline: none;
  }

  .ttx_input_container div {
    margin-left: 0.75rem;
  }

  .ttx_index1 {
    padding-top: 1rem;
    width: 100%;
    height: .8rem;
    font-size: 14px;
  }

  .ttx_login_tips {
    font-size: .5rem;
    color: red;
    padding: .4rem .6rem;
    line-height: .5rem;
  }

  .ttx_login_container {
    margin: 0 .5rem 1rem;
    font-size: .7rem;
    color: #fff;
    background-color: #4cd964;
    padding: .5rem 0;
    border: 1px;
    border-radius: .15rem;
    text-align: center;
  }

  .ttx_to_forget {
    float: right;
    font-size: .6rem;
    color: #3b95e9;
    margin-right: .3rem;
  }

  .ttx_switch {
    width: 1.85rem;
    height: .7rem;
    border-radius: 1.2rem;
    position: absolute;
    right: 1rem;
    top: .3rem;
  }

  .ttx_BG1 {
    display: inline-block;
    width: 1.85rem;
    height: .7rem;
    margin-left: -0.2rem;
    margin-right: 0.5rem;
    background: #4cd964;
    border-radius: 1rem;
    position: absolute;

  }

  .ttx_BG2 {
    margin-top: 0.1rem;
    display: inline-block;
    width: 1.85rem;
    height: .7rem;
    background: #cccc;
    border-radius: 1rem;

  }

  .ttx_switch1 {
    position: absolute;
    left: .3rem;
    color: white;
    font-size: .4rem;
    margin-bottom: 1rem;
    line-height: 0.7rem;
  }

  .ttx_switch2 {
    position: absolute;
    left: .1rem;
    top: -0.1rem;
    color: white;
    font-size: .7rem;
    margin-bottom: 1rem;
    line-height: 0.7rem;
  }

  .ttx_yd {
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

  .ttx_imgs {
    width: 3.5rem;
    height: 1.5rem;
    position: absolute;
    left: 9rem;
    top: 0;
    margin-top: 2px;
  }

  .ttx_change_img {
    height: 1.7rem;
    position: absolute;
    left: 12rem;
    top: 0;
    font-size: .55rem;
  }

  .ttx_change_img p {
    padding: 0.1rem 0;
  }

  .ttx_alet {
    position: revert;
  }

  .ttx_tip_container {
    width: 12rem;
    height: 7.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    position: absolute;
    left: 2rem;
    top: 6.5rem;

  }

  .ttx_tip_icon {
    width: 3rem;
    height: 3rem;
    border: .15rem solid #f8cb86;
    border-radius: 50%;

  }

  #ttx_span1 {
    display: block;
    width: .12rem;
    height: 1.5rem;
    background-color: #f8cb86;
    margin-left: 1.4rem;
    /*align-items: center;*/
    margin-top: .5rem;

  }

  #ttx_span2 {
    display: block;
    width: .2rem;
    height: .2rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .2rem;
    background-color: #f8cb86;
    margin-left: 1.35rem;

  }

  .confrim {
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

  .ttx_tip_text {
    font-size: .7rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;

  }
</style>
