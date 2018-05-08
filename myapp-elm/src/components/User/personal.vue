<template>
  <div class="ttx_all">
    <div class="ttx_profile_page">
      <header class="ttx_head_top">
        <section class="ttx_head_goback">
          <svg class="ttx_head_sev" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255);stroke-width: 2px;">
            </polyline>
          </svg>
        </section>
        <section class="ttx_head_ell">
          <span class="ttx_title_text">我的</span>

        </section>
      </header>
      <div class="ttx_profile-number">
        <a class="ttx_profile_link" href="">
          <div class="ttx_portrait"><img id="ttx_imgs" src="./img/1.png" alt=""></div>
          <div class="ttx_user-info">
            <p>登录/注册</p>
            <p>
              <span class="el-icon-mobile-phone">
                <span>暂无绑定手机号</span>
              </span>
            </p>
          </div>
        </a>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personal",
    data() {
      return {
        value1: "",
      }
    },
    created() {
      this.value1 = this.$route.params.name
      console.log(this.value1)
    }
  }
</script>

<style scoped>
  .ttx_all {
    background: rgb(245, 245, 245);
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
    background: #3190e8;
  }

  .ttx_head_sev {
    width: 100%;
    height: 100%;
  }

  .ttx_head_ell {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }

  .ttx_profile-number {
    /*padding: 0;*/
    /*margin: 0;*/
    /*list-style: none;*/
    /*font-style: normal;*/
    /*text-decoration: none;*/
    /*border: none;*/
    /*color: #333;*/
    /*font-weight: 400;*/
    /*font-family: Microsoft Yahei;*/
    /*box-sizing: border-box;*/
  }

  .ttx_portrait {
    /*width: 20rem;*/
    /*height: 20rem;*/
    /*border-radius: 50%;*/
    /*color: white;*/
  }

  .ttx_portrait {
    background: #3190e8;

  }

  .ttx_profile_link {
    margin-top: 1.9rem;
    display: block;
  }

  #ttx_imgs {
    width: 2.5rem;
    border-radius: 50%;
  }

</style>
