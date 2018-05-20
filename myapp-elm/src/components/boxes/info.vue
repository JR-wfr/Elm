<template>
    <div class="bode3">
      <div class="wfr-title-info">
        <section class="wfr-title-svg" @click="Inforclick">
          <svg data-v-cec0c0c0="" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><polyline data-v-cec0c0c0="" points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width:2px;"></polyline></svg>
        </section>
        <section class="wfr-info">
          账户信息
        </section>
      </div>
      <div class="wfr-info-conter">
        <section class="wfr-info-portrait">
          <input type="file" class="wfr-info-file">
          <h2>头像</h2>
          <section class="wfr-file-portrait">
            <img  src="//elm.cangdu.org/img/default.jpg" class="headportrait-div-top">
            <span> ></span>
          </section>
        </section>
        <section class="wfr-info-name111">
          <h2>用户名</h2>
          <div class="wfr-info-div1">
              <span class="wfr-info-span1">{{this.ttobj2.phone}}</span>
              <span class="wfr-info-span2"> > </span>
          </div>
        </section>
        <section class="wfr-info-loca">
          收货地址
          <span class="wfr-loca-span1"> ></span>
        </section>
        <div class="wfr-zhanghao">
          <span>绑定账号</span>
        </div>
        <section class="wfr-info-loca">
          <img class="wfr-phone-img" src="data:image/png;base64,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" alt="" style="display: inline-block; margin-right: 0.4rem;">
          手机
          <span class="wfr-loca-span2"> ></span>
        </section>
        <div class="wfr-zhanghao">
          <span>安全设置</span>
        </div>
        <section class="wfr-info-loca">
          登陆密码
          <span class="wfr-loca-span3">修改&nbsp;&nbsp;></span>
        </section>
        <div class="wfr-load" @click="SignOut">
          退出登陆
        </div>
      </div>
      <!--蒙版信息-->
      <div  class="wfr-info-mask" v-show="wmask1">
        <section class="cover-content  cover-animate">
          <div class="cover-content-div1">
            <div class="sa-icon">
              <span data-v-c2d94162="" class="sa-body">
              </span>
              <span class="sa-dot"></span>
            </div>
            <h2>是否退出登录</h2>
            <div class="sa-botton">
              <span  class="waiting" @click="dengdeng">再等等</span>
              <div  style="display: inline-block;">
                <span class="quitlogin" @click="OutInfo">退出登录</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script>
    export default {
        name: "info",
      data(){
          return{
            ttobj2:{},
            wmask1:false,
          }
      },
        created(){
          this.ttobj2 =JSON.parse(localStorage.getItem("key"))
          console.log(this.ttobj2)
        },
      methods:{
        Inforclick(){
          this.$router.go(-1)
        },
        SignOut(){
          this.wmask1 = true;
        },
        dengdeng(){
          this.wmask1 = false;
        },
        OutInfo(){
          this.$router.push({name:"login"});
          localStorage.removeItem('key');
        }
      }
    }
</script>

<style scoped>
  .quitlogin{
    display: inline-block;
    width: 4.1rem;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    margin-left: 1rem;
    border-radius:.27rem;
    -webkit-font-smoothing: antialiased;
    color: white;
    font-size: .7rem;
    background-color: #dd6b55;
  }
  .waiting{
    display: inline-block;
    border-radius:.27rem;
    width: 4rem;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    background: #c1c1c1;
    margin-left:1.8rem;
    font-size: 0.7rem;
    color:white;
    -webkit-font-smoothing: antialiased;
  }
  .cover-content-div1 h2{
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
    color: #575757;
    font-weight: 500;
    margin: 1.4rem 0;
  }
  .sa-dot{
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #f8bb86;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
  }
  .sa-body{
    width: 5px;
    height: 2.5rem;
    border-radius: 2px;
    background: #f8bb86;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
  }
  .sa-icon{
    width: 90px;
    height: 90px;
    border: 4px solid #f8bb86;
    border-radius: 50%;
    margin: 20px auto;
    position: relative;
  }
  .cover-content-div1{
    height: 12rem;
    padding: 0.3rem 1rem;
  }
  .wfr-info-mask{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background:rgba(0,0,0,0.3);

  }
  @keyframes wflash {
    0%{
      transform: scale(0.8);
    }
    25%{
      transform: scale(1);
    }
    50%{
        transform: scale(0.8);
    }
    75%{
      transform: scale(1.1);
    }
    100%{
      transform: scale(1);
    }


  }

  .cover-content{
    width: 94%;
    background: #fff;
    /*padding: 17px;*/
    position: absolute;
    top: 20%;
    left: 3%;
    right: 3%;
    z-index: 1000;
    border-radius: 5px;
    animation:wflash .5s linear;
  }
  .wfr-load{
    width: 95%;
    margin: 0.8rem auto 0;
    line-height: 1.6rem;
    border-radius: 5px;
    text-align: center;
    background: #d8584a;
    font-size: .6rem;
    color: #fff;
  }
  .wfr-loca-span3{
    /*display: inline-block;*/
    margin-left:61%;
    font-size: 0.7rem;
    color:#999;
    -webkit-font-smoothing: antialiased;
  }
  .wfr-loca-span2{
    display: inline-block;
    margin-left:71.3%;
    font-size: 0.8rem;
    color:#999;
  }
  .wfr-phone-img{
    vertical-align: -.3rem;
  }
  .wfr-zhanghao span{
    /*display: inline-block;*/
    transform: scale(0.9);
  }
  .wfr-zhanghao{
    color: #666;
    /*width: 100%;*/
    height: 2rem;
    line-height: 2rem;
    font-size: 0.5rem;
    padding-left: 0.35rem;
    font-weight: 100;
  }
  .wfr-loca-span1{
    display: inline-block;
    margin-left:74%;
    font-size: 0.8rem;
    color:#999;
  }
  .wfr-info-loca{
    color: #333;
    /*width: 100%;*/
    height: 2rem;
    line-height: 2rem;
    border-bottom:1px solid #ddd;
    background-color: white;
    margin-top: 0;
    font-size: 0.6rem;
    padding-left: 0.35rem;
    font-weight: 500;
  }
  .wfr-info-span2{
    display: inline-block;
    margin-left: 0.3rem;
    margin-right: 0.73rem;
    font-size: .8rem;
    transform: scale(1.1);
  }
  .wfr-info-span1,.wfr-info-span2{
    color:#999;
    font-size: 0.7rem;
  }
  .wfr-info-div1{
    float: right;
  }
  .wfr-info-name111 h2{
    font-size: .6rem;
    font-weight: 500;
    color: #333;
    margin-left: 3%;
    float: left;
  }
  .wfr-info-name111{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    border-bottom:1px solid #ddd;
    background-color: white;
    margin-top: 0;
    overflow: hidden;
  }
  .wfr-file-portrait span{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    font-size: 0.8rem;
    margin-left: 0.4rem;
    color:#999;
  }
  .wfr-file-portrait{
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 1%;
  }
  .headportrait-div-top{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .wfr-info-portrait h2{
    font-size: .6rem;
    font-weight: 500;
    color: #333;
    margin-left: 3%;
  }
  .wfr-info-portrait{
    /*margin-top: 2.5rem;*/
    /*width: 100%;*/
    height: 3.5rem;
    line-height: 3.5rem;
    border-top: 1px solid #ddd;
    border-bottom:1px solid #ddd;
    position: relative;
    background-color: white;
  }
  .wfr-info-file{
    display: block;
    position: absolute;
    opacity: 0;
    left: 0;
    /*width: 100%;*/
  }
  .wfr-info-conter{
    padding-top: 1.95rem;
  }
  .wfr-title-svg{
    left: .4rem;
    width: .6rem;
    height: 1rem;
    line-height: 2.2rem;
    margin-left: .4rem;
  }
  .wfr-title-info{
    background-color: #3190e8;
    position: fixed;
    /*z-index: 100;*/
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  .wfr-info{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }
</style>
