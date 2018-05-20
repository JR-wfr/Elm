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
  <!--<compont></compont>-->
  <!--<router-view></router-view>-->
  <div class="dingdan">
    <div class="dingdan-div1">
      <img src="../assets/img/2.jpg" alt="">
    </div>
    <div class="dingdan-div2">
      <h2>尚中尚酒店鲍鱼4只(中...)</h2>
      <p>10个小时前</p>
      <span>订单以完成</span>
    </div>
  </div>
  <p class="shangpin">鲍鱼4只 等<span>15件</span> 商品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共计：<span>¥9999</span></p>
  <div class="food-song">
    <span class="food-song-span1">相似商家</span>
    <span class="food-song-span2">再来一单</span>
  </div>
</div>
</template>

<script>
  import compont from "./ElmShop/compt"
    export default {
        name: "order",
      components: {
      }
    }
</script>

<style scoped>
  .food-song-span2,.food-song-span1{
    display: inline-block;
    color: #3190e8;
    font-size: .6rem;
    border:1px solid  #3190e8;
    padding: 0.4rem 0.4rem;
    margin-right: 0.5rem;
    border-radius: 0.2rem;
  }
  .food-song{
    width: 50%;
    height: 1.5rem;
    padding: 1rem  0 0 0.3rem;
    margin-left: 45%;
    margin-right: 0.4rem;
  }
  .shangpin span{
    font-size: 0.9rem;
    color: #f90;
  }
  .shangpin{
    /*text-align: center;*/
    color: #333;
    font-size: .5rem;
    margin-left: 0.7rem;
  }
  .dingdan-div2 span{
    display: inline-block;
    margin-top: 0.4rem;
    font-size: 0.5rem;
    color: #999;
    margin-left: 2.6rem;
  }
  .dingdan-div2 p{
    display: inline-block;
    margin-top: 0.4rem;
    font-size: 0.5rem;
    color: #999;
  }
  .dingdan-div3{
    width: 2rem;
    font-size: 0.6rem;
  }
  .dingdan-div1{
    margin-left: 0.4rem;
  }
  .dingdan-div2{
    margin-right: 0.6rem;
  }
  .dingdan-div2 h2{
    color: black;
    font-weight: 600;
    font-size: .9rem;
  }
  .dingdan{
    padding-top: 3rem;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    justify-items: center;
    /*padding-left: 0.3rem;*/
  }
  .dingdan img{
    width: 2rem;
    height: 2rem;
  }
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
