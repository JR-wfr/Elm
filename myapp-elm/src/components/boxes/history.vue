<template>
    <div class="history">
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
          <span class="ttx_title_text">历史红包</span>
        </section>
      </header>
      <!---->
      <div class="hongbao_list-div">
        <ul class="hongbao_list_ul">
          <li class="hongbao_list_li">
            <section class="list_item">
              <div class="list_item_left">
                <span class="list_item_left_1">¥</span>
                <span class="list_item_left_2">5</span>
                <span class="list_item_left_3">.</span>
                <span class="list_item_left_4">0</span>
                <span class="list_item_left_5">满25元可用</span>
              </div>
              <div class="list_item_right">
                <h4 class="list_item_right_1">普通红包</h4>
                <p class="list_item_right_2">2018-5-25过期</p>
                <p class="list_item_right_3">收现货手机号为18203665633</p>
              </div>
            </section>
            <img class="expired" src="./img/9429132BDD374A3E2C8AFDAE9705E1B5.png" alt="">
          </li>
          <!---->
          <li class="hongbao_list_li">
            <section class="list_item">
              <div class="list_item_left">
                <span class="list_item_left_1">¥</span>
                <span class="list_item_left_2">5</span>
                <span class="list_item_left_3">.</span>
                <span class="list_item_left_4">0</span>
                <span class="list_item_left_5">满25元可用</span>
              </div>
              <div class="list_item_right">
                <h4 class="list_item_right_1">普通红包</h4>
                <p class="list_item_right_2">2018-5-25过期</p>
                <p class="list_item_right_3">收现货手机号为18203665633</p>
              </div>
            </section>
            <img class="expired" src="./img/9429132BDD374A3E2C8AFDAE9705E1B5.png" alt="">
            <footer class="list_item_footer">
              <p class="ttx_snack">限品类：小吃夜宵</p>
            </footer>
          </li>
          <!---->
          <li class="hongbao_list_li">
            <section class="list_item">
              <div class="list_item_left">
                <span class="list_item_left_1">¥</span>
                <span class="list_item_left_2">5</span>
                <span class="list_item_left_3">.</span>
                <span class="list_item_left_4">0</span>
                <span class="list_item_left_5">满25元可用</span>
              </div>
              <div class="list_item_right">
                <h4 class="list_item_right_1">普通红包</h4>
                <p class="list_item_right_2">2018-5-25过期</p>
                <p class="list_item_right_3">收现货手机号为18203665633</p>
              </div>
            </section>
            <img class="expired" src="./img/9429132BDD374A3E2C8AFDAE9705E1B5.png" alt="">
            <footer class="list_item_footer">
              <p class="ttx_snack">限品类：果蔬生鲜、商店超市</p>
            </footer>
          </li>
          <!---->
          <li class="hongbao_list_li">
            <section class="list_item">
              <div class="list_item_left">
                <span class="list_item_left_1">¥</span>
                <span class="list_item_left_2">5</span>
                <span class="list_item_left_3">.</span>
                <span class="list_item_left_4">0</span>
                <span class="list_item_left_5">满25元可用</span>
              </div>
              <div class="list_item_right">
                <h4 class="list_item_right_1">普通红包</h4>
                <p class="list_item_right_2">2018-5-25过期</p>
                <p class="list_item_right_3">收现货手机号为18203665633</p>
              </div>
            </section>
            <img class="expired" src="./img/9429132BDD374A3E2C8AFDAE9705E1B5.png" alt="">
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "history"
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
  .hongbao_list-div{
    height:100%;
    position: relative;
  }
  .hongbao_list_ul{
    position:absolute;
    top: 2.4rem;
    left: 3%;
  }
  .hongbao_list_li:nth-child(1){
    height: 5rem;
  }
  .hongbao_list_li:nth-child(2){
    height: 6.6rem;
  }
  .hongbao_list_li:nth-child(3){
    height: 6.6rem;
  }
  .hongbao_list_li:nth-child(4){
     height: 5rem;
   }
  .hongbao_list_li:nth-child(4){
    height: 5.5rem;
  }
  .hongbao_list_li{
    width: 96%;
    height: 5.5rem;
    /*margin: 1.5rem 0;*/
    background-color: white;
    margin-bottom: .5rem;
    border-radius: .25rem;
    position: relative;
  }
  .list_item{
    background: url("./img/FDF1F9400866FEA2DC8656896B35AD3B.png") repeat-x;
    background-size: .5rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem .5rem .8rem;
  }
  .list_item_left{
    border-right: .025rem dotted #ccc;
    flex:1;
  }
  .list_item_left_1{
    font-size: .75rem;
    color: #ccc;
    font-weight: 700;

  }
  .list_item_left_2{
    font-size: 2rem;
    color: #ccc;
  }
  .list_item_left_3{
    font-size: 1rem;
    color: #ccc;
    font-weight: 700;
  }
  .list_item_left_4{
    font-size: 1rem;
    color: #ccc;
    font-weight: 700;
  }
  .list_item_left_5{
    font-size: .4rem;
    color: #999;
  }
  .list_item_right{
    flex: 2;
    margin-left: 1.5rem;
    line-height: 1.5;
  }
  .list_item_right_1{
    font-size: .7rem;
    color: #666;
    margin-left: -.7rem;
  }
  .list_item_right_2{
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }
  .list_item_right_3{
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
  }
  .expired{
    fill: #ddd;
    width: 3rem;
    height: 3rem;
    top: .6rem;
    right: .2rem;
    position: absolute;
  }
  .list_item_footer{
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  .ttx_snack{
    margin-top: 0.3rem;
    height: 0.83rem;
    list-style-type: disc;
    font-size: .4rem;
    color: #999;
    background-color: #f9f9f9;
    margin-left: .4rem;
  }
</style>
