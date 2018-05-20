<template>
  <div class="search">
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
        <span class="ttx_title_text">搜索</span>
      </section>
    </header>
    <!---->
    <form class="search_form" action="">
      <input type="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" class="search_submit">
    </form>
  </div>
</template>
<script>
  export default {
    name: "search",
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
  .search_form{
    margin-top: 2rem;
    background-color: #fff;
    padding: .5rem;
    display: flex;
  }
  .search_input{
    flex: 4;
    border: .025rem solid #e4e4e4;
    font-size: .65rem;
    color: #333;
    border-radius: .125rem;
    background-color: #f2f2f2;
    font-weight: 700;
    padding: 0 .25rem;
    height: 1.5rem;
    outline: 0;
  }
  .search_submit{
    flex: 1;
    border: .025rem solid #3190e8;
    margin-left: .2rem;
    font-size: .65rem;
    color: #fff;
    border-radius: .125rem;
    background-color: #3190e8;
    font-weight: 700;
    padding: 0 .25rem;
    outline: 0;
  }
</style>
