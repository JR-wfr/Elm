<template>
<div class="app">
  <div class="head_top">
<div class="ttx_rating_page">

<section class="ttx_head_goback">
  <router-link to="/login">
  <svg class="ttx_head_sev" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255);stroke-width: 2px;">
    </polyline>
  </svg>
  </router-link>
</section>
  <section class="ttx_title_head_ellipsis">
<span class="ttx_title_text">会员中心</span>
  </section>
</div>
  </div>
</div>
</template>

<script>
    export default {
        name: "VIP"
    }
</script>

<style scoped>
.app{
  width: 100%;
  height: 100%;
  background: rgb(245,245,245);
}
.head_top{
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
}
  .ttx_rating_page{
    padding-top: 1.95rem;
  }
  .ttx_head_goback{
    left: .4rem;
    width: .6rem;
    height: 1rem;
    line-height: 2.2rem;
    margin-left: .4rem;
  }
  .ttx_head_sev{
    width: 0.8rem;
    float: left;
    height: 1rem;
    z-index: 10;
    position: absolute;
    left: 8px;
    top: 10px;

  }
  .ttx_title_head_ellipsis{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }
  .ttx_title_text{
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
</style>
