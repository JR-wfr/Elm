<template>
  <div>
    <div class="ttx_discount">
      <!--顶部-->
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
          <span class="ttx_title_text">我的优惠</span>
        </section>
      </header>

      <div>
        <div class="ttx_category_title">
          <span class="ttx_choosed">红包</span>
          <span>商家代金券</span>
        </div>
      </div>
      <!--三个红包的顶部-->
      <div class="ttx_hongbao_title">
        <div class="ttx_expire">有<span id="s2">3</span>个红包即将到期</div>
        <div class="ttx_explain">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAvJJREFUSA21Vk1IFVEU/s7MvOd/+U+pkZmEEBXiIgpq06KFYUmLFrZp0S4fFAW1ioi2RU9oFbQJCgoqQYIWEkKQixKK7IfMCnuEYvlSek99M7d77rzRGWfu06Du5s49P98599zzM4QCa3dyumlR2IeFEJ0gbJWiDXnxFATGiGggRuaj4UTNhA6GohjtfVMNcMQlgjghwc0oGY8mjdgCdAsGXRzprUt5dG8PGWjv+95FNt0WEBWe0Fp2As0KUxwf6d3Q75c3/IeO5GQCNj34W3DGUDpSV2H4QJduwJ4zuBQNGPVky+KELVUmZEgw/iOHuQXhsVbs5MAU3d5NlAGOOdnOuyjPK4oIp/aW4+iOEhlm1x/bEbj/OoO+Z3P4vRg25IbLaOM3sZR5+aBR4Ax39VAlOpriGPyYxdNP8zAl8cj2EhzbVYraMgPnBtIrbpAPl8SUjJPkpmLuc1S2dLYV4/LB9XjyIYvzj5eBLBnEuz01aKm20HNnGm8ncyEjnF0xspqNfJ5HpmJ7Y0wp9o9mAgA5Bxj+uqBo2+rcIAQE5IEdZmxDFdFKbv78fiqHh28yGJsOe9i4zvVpJhN+Aw+OsS1VoRqZe6/Y86D3rLxzYwx7NseRzjp4+c29iQca2GX1c0p65R/g6Q4t1Saud1Uq9gX5LrPzGu9cgIbInNeB15cbuNFdhdIYyeyZwfP8O+jkmc4GQv1Dp3BmXwXqy01cGfyFofECoVkGSBncFZfP+q+4fNMDrUWYSOfQP5rVC/o5ElsWJw34abpvLirTIHz5aetEQnTGLlhofg0urjppJCNbw0y24MMqtaVC42Gh+rkfLeK72CK01lpoltW7lsWYjO1mkRwW3KAKKW6q5PSswtn9q48JhSUxGU8Z4K7HwwKQrVazON+HZLMbSa2WPeS4g8edbm7/zYPysHAccU03EzS2fWRyDINOv0jUJz1iwAAT/+vIZAM8iYRptIGMm5wJTCu0lIyUZR1vivnlQzfwM//Fb8sfhhUzHMwI/u8AAAAASUVORK5CYII="
            alt="">
          <span id="s1">红包说明</span>

        </div>

      </div>
      <ul style="background: rgb(245,245,245)" class="hongbao_list_ul">
        <li  class="hongbao_list_li">
        <div  class="list_item">
        <div  class="ttx_list_item_left">
          <span style="color: red;">¥</span>
          <span style="font-size: 1.5rem;color: red">1</span>
          <span style="color: red">.</span>
          <span style="color: red">0</span>
          <p style="color: #999;font-size: .4rem">满 20 元可用</p>
        </div>
          <div class="ttx_list_item_right">
            <h4 class="h1">分享红包</h4>
            <p class="p1">2019-08-24到期</p>
            <p class="p2">限收货手机号为 </p>
            <p class="p3">962325513</p>
          </div>
          <div class="ttx_time_left">
          剩三日
          </div>
        </div>
        </li>
        <!---->
        <li  class="hongbao_list_li">
          <div  class="list_item">
            <div  class="ttx_list_item_left">
              <span style="color: red;">¥</span>
              <span style="font-size: 1.5rem;color: red">2</span>
              <span style="color: red">.</span>
              <span style="color: red">0</span>
              <p style="color: #999;font-size: .4rem">满 40 元可用</p>
            </div>
            <div class="ttx_list_item_right">
              <h4 class="h1">分享红包</h4>
              <p class="p1">2019-08-24到期</p>
              <p class="p2">限收货手机号为 </p>
              <p class="p3">962325513</p>
            </div>
            <div class="ttx_time_left">
              剩三日
            </div>
          </div>
        </li>
        <!---->
        <li  class="hongbao_list_li">
          <div  class="list_item">
            <div  class="ttx_list_item_left">
              <span style="color: red;">¥</span>
              <span style="font-size: 1.5rem;color: red">4</span>
              <span style="color: red">.</span>
              <span style="color: red">5</span>
              <p style="color: #999;font-size: .4rem">满 30 元可用</p>
            </div>
            <div class="ttx_list_item_right">
              <h4 class="h1">分享红包</h4>
              <p class="p1">2019-08-24到期</p>
              <p class="p2">限收货手机号为 </p>
              <p class="p3">962325513</p>
            </div>
            <div class="ttx_time_left">
              剩三日
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "discount"
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

  .ttx_category_title {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    background-color: #fff;
  }

  .ttx_category_title > span {
    text-align: center;
    font-size: .65rem;
    color: #333;
    padding-bottom: .2rem;
    border-bottom: .1rem solid red;
  }

  .ttx_choosed {
    border-bottom-color: #3190e8;
    color: #3190e8;
  }

  .ttx_hongbao_title {
    display: flex;
    justify-content: space-around;
    font-size: .6rem;

  }

  .ttx_explain img {
    width: .6rem;
  }

  #s1 {
    color: #3190e8;
  }

  #s2 {
    color: red;
  }
  .hongbao_list_ul{
  padding: .4rem;

  }
  .hongbao_list_li{
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBT…RBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=) repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .6rem;
    border-radius: .25rem;
    margin-top: .7rem;
    margin-left: .4rem;

  }
  .list_item{
    display: flex;
    justify-content: space-between;
    padding: 1rem .5rem .8rem;
    line-height: 1.5;
  }
.ttx_list_item_left{
  border-right: .025rem dotted #ccc;
}
  .ttx_list_item_right{
    /*border-right: .025rem dotted #ccc;*/
    /*font-size: .4rem;*/
    /*float: left;*/
    /*margin-left: .7rem;*/
    /*!*margin-top: 1rem;*!*/
    /*padding: 1rem;*/
    /*line-height: 1.5;*/
  }
  .ttx_time_left{
    /*float: left;*/
    margin-left: 3rem;
    font-size: .75rem;
    color: #ff5340;
    margin-top: .7rem;
  }
  .h1{
    font-size: .7rem;
    color: #666;
    margin-left: .7rem;
  }
 .p1{
    /*list-style-type: disc;*/
    margin-left: .7rem;
    font-size: .4rem;
    color: #999;
  }
  .p2{
    /*list-style-type: disc;*/
    margin-left: .7rem;
    font-size: .4rem;
    color: #999;
  }
  .p3{
    /*list-style-type: disc;*/
    margin-left: .7rem;
    font-size: .4rem;
    color: #999;
  }
</style>
