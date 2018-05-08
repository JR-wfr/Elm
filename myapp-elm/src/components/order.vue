<template>
<div class="ttx_order_page">
  <!--顶部-->
<header id="ttx_head_top">
<section class="head_goback">
  <router-link to="/personal">
  <svg class="ttx_head_sev" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255);stroke-width: 2px;">
    </polyline>
  </svg>
  </router-link>
</section>
  <section class="ttx_title_headellipsis">
    <span class="ttx_title_text">订单列表</span>
  </section>
</header>
  <!--底部-->
  <div class="foot_guide">
    <!--外卖-->
    <div class="ttx_guide_item">
      <div class="el-icon-news"></div>
      <div class="ttx_allicon_style"><span>外卖</span></div>
    </div>
    <!--搜索-->
    <div class="ttx_guide_item">
      <div class="el-icon-news"></div>
      <div class="ttx_allicon_style"><span>搜索</span></div>
    </div>
    <!--订单-->
    <div style="color: #3190e8;" class="ttx_guide_item">
      <div class="el-icon-news"></div>
      <div class="ttx_allicon_style"><span>订单</span></div>
    </div>
    <!--我的-->
    <div class="ttx_guide_item">
      <div  class="el-icon-news"></div>
      <div class="ttx_allicon_style"><span>我的</span></div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style scoped>
.ttx_order_page{
  width: 100%;
  height: 100%;
  background-color: rgb(245,245,245);
}
  #ttx_head_top{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  .head_goback{

    line-height: 2.2rem;
    margin-left: .4rem;
  }
  .ttx_head_sev{
    width: 0.8rem;
    float: left;
    height: 1rem;

    margin-top: .4rem;
    z-index: 10
  }
  .ttx_title_headellipsis{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }
.el-icon-tickets {
  border-bottom: 1px solid #f1f1f1;
  padding: .39rem .266667rem .433333rem 0;
}

.el-icon-date {
  color: red;
  border-bottom: 1px solid #f1f1f1;
  padding: .39rem .266667rem .433333rem 0;
}

.el-icon-star-off {
  color: gold;

  border-bottom: 1px solid #f1f1f1;
  padding: .39rem .266667rem .433333rem 0;

}

.ttx_myorder-div {
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: .433333rem .266667rem .433333rem 0;
  font-size: .7rem;
  color: #333;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.el-icon-picture {
  color: #3190e8;
  border-bottom: 1px solid #f1f1f1;
  padding: .39rem .266667rem .433333rem 0;
}

.el-icon-upload {
  color: #3190e8;
  border-bottom: 1px solid #f1f1f1;
  padding: .39rem .266667rem .433333rem 0;
}

.foot_guide {
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 1.95rem;
  display: -ms-flexbox;
  display: flex;
  /*box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);*/
}

.ttx_guide_item {
  flex: 1;

  display: flex;
  text-align: center;

  flex-direction: column;

}

.ttx_allicon_style span {
  font-size: .45rem;
  color: #666;
}
</style>
