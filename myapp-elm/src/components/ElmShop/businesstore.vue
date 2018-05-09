<template>
  <div>
    <div class="wfr-info-logo">
      <img :src="imgurl1+wfrData.image_path" class="header_cover_img">
      <div class="wfr-stroe-infor">
        <img :src="imgurl1+wfrData.image_path" class="wfr-stroe-infor-img">
        <div class="wfr-info-name">
          <span>{{wfrData.name}}</span>
          <p class="wfr-info-name-p1">商家配送／分钟送达／配送费¥5</p>
          <p class="wfr-info-name-p2">{{wfrData.promotion_info}}</p>
        </div>
        <div class="wfr-info-logo-activity">
          <div>
            <span class="tip_icon" style="background-color: rgb(240, 115, 115); border-color: rgb(240, 115, 115);">减</span>
            <span>满30减5，满60减8（APP专享）</span>
          </div>
          <div class="tip_icon2">
            <router-link :to="{}">
              <span class="tip_icon2-span">1个活动</span>
              <svg class="footer_arrow"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left">
                <svg viewBox="0 0 14 14" id="arrow-left" width="100%" height="100%"><path d="M0 0 L8 7 L0 14" stroke="#fff" stroke-width="1" fill="none"></path></svg>
              </use></svg>
            </router-link>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "businesstore",
        data(){
          return{
            shopid:"",
            wfrData:"",
            imgurl1: "//elm.cangdu.org/img/",
          }
        },
        created(){
          this.shopid = this.$route.query.id;
          var api6 = `http://cangdu.org:8001/shopping/restaurant/${this.shopid}`
          this.axios.get(api6).then((responent)=>{
            this.wfrData = responent.data
            console.log(this.wfrData)
          })
        }
    }
</script>

<style scoped>
  .cart_icon{
    fill: black;
    position: absolute;
    top: 17rem;
    z-index: 15;
  }
  .tip_icon{
    margin-right: 0.15rem;
  }
  .tip_icon2-span{
    color: #f1f1f1;
    font-size: 0.3rem;
    font-weight: 200;
  }
  .footer_arrow{
    width: 0.6rem;
    height: 0.6rem;
    fill: white;
    margin-bottom: 0.2rem;
    margin-left: 0.3rem;
  }
  .tip_icon2{
    float: right;
  }
  .wfr-info-logo-activity{
    width: 93%;
    position: absolute;
    top: 3.8rem;
    margin-top:0.2rem;
  }
  .wfr-info-logo-activity span{
    color: #f1f1f1;
    font-size: 0.3rem;
    font-weight: 200;
    float: left;
  }
  .wfr-info-name-p2{
    font-weight: 100;
    font-size: .3rem;
    color: #f1f1f1;
    margin: 0 0.1rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

  }
  .wfr-info-name-p1{
    margin: 0.55rem 0.1rem;
    font-weight: 100;
    font-size: .3rem;
    color: #f1f1f1;
  }
  .wfr-info-name{
    position: absolute;
    top:0.3rem;
    left: 3.5rem;
  }
  .wfr-info-name span{
    font-size: .8rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: .3rem;
  }
  .header_cover_img{
    width: 150%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .wfr-info-logo{
    height: 5.2rem;
    overflow: hidden;
    position: relative;
  }
.wfr-stroe-infor{
  height: 5.2rem;
  position: relative;
  z-index: 10;
  background-color: rgba(119,103,137,.55);
  padding: .4rem 0 .4rem .4rem;
  width: 100%;
  overflow: hidden;
}
  .wfr-stroe-infor-img{
    width: 2.6rem;
    height: 2.6rem;
    border-radius: .2rem;
    position: absolute;
    top: 0.3rem;
    left: 0.5rem;
    z-index: 10;
  }
</style>
