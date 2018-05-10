<template>
<div class="ttx_five">
  <header class="ttx_head_top">
    <section class="ttx_head_goback">
      <router-link to="/service">
        <svg class="ttx_head_sev">
          <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2px;">

          </polyline>
        </svg>
      </router-link>
    </section>
    <section class="ttx_title_head_ellipsis">
      <span class="ttx_title_text">教我拍大片</span>
    </section>
  </header>
  <p>
    <img class="imgs" src="http://fuss10.elemecdn.com/5/de/5efc9ee81ceba1ae835b0c2298ba9jpeg.jpeg" alt="">
    <span class="ttx_span1">## 1. 清晰 拍照时持稳手机，避免出现大幅度晃动。将焦点对准食物本身，锁焦后、点击快门。</span>
    <img class="imgs" src="http://fuss10.elemecdn.com/8/89/4920bc3a0a34c0d26a4460ce03157jpeg.jpeg" alt="">
    <span class="ttx_span1">## 2. 光线 尽量选择明亮、柔和的光线，避免强光直射；拍摄时避免身体或器物的阴影遮住食物本身，有条件时，可以用小型手电进行补光，以提高食物质感。</span>
    <img class="imgs" src="http://fuss10.elemecdn.com/4/9b/ca198810b12c8fc57ae562c6fa92cjpeg.jpeg" alt="">
    <span class="ttx_span1">## 3. 构图 构图可以选择通用的三分构图法或中心构图法，如果是拍摄整体食物时，需要考虑食物的完整性；如果拍摄特写时，需要将细节体现清楚。</span>
    <img class="imgs"  src="http://fuss10.elemecdn.com/c/3b/958696046787bb467708c8d9a5171jpeg.jpeg" alt="">
    <span class="ttx_span1">## 4.角度 可以选择45度拍摄、90度俯拍或者水平拍摄，一切都看你的心情哦~</span>
    <img class="imgs" src="http://fuss10.elemecdn.com/2/d3/d31b1f81eb853c6042b9c172a514bjpeg.jpeg" alt="">
    <span class="ttx_span1">## 5. 背景 可以选择合适的背景拍摄，例如黑色能体现食物蒸腾的热气，白色让食物更有质感，米色更加温馨等；但背景尽量不要太乱，以免影响整体效果。</span>
    <img class="imgs" src="http://fuss10.elemecdn.com/a/fe/b9716e028917fd81f6c5a99242b6fjpeg.jpeg" alt="">
    <span class="ttx_span1">## 6. 细节 餐具的搭配使用、人物的烘托、道具的陪衬等都能使食物更具诱惑力，照片更有氛围。</span>
  </p>
</div>
</template>

<script>
    export default {
        name: "five"
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

  .ttx_title_text {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;

  }
  .imgs{
    width: 100%;
    margin-top: 1.9rem;
  }
  .ttx_span1{
    font-size: .6rem;
  }

</style>
