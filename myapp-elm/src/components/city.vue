<template>
  <div class="wfr-one-city">
    <div class="wfr-logo-city">
      <ul class="wfr-logo-city-ul">
        <li><router-link to="/" class="wfr-log-city-link"><</router-link></li>
        <li class="wfr-logo-text">{{name}}</li>
        <li><router-link to="/" class="wfr-li-text">切换城市</router-link></li>
      </ul>
      <div class="wfr-ipt-local">
        <el-input
          placeholder="请输入学校、商务楼、地址"
          v-model="value1"
          clearable class="wfr-ipt-ps">
        </el-input>
        <div class="wfr-city-btn" @click="WRFclick">提交</div>
        <div class="wfr-Search-history">搜索历史</div>
      </div>
      <ul class="wfr-logo-city-ul2">
        <li v-for=" arrPs in PScity">
            <div class="wfr-PScity-xx1">{{arrPs.name}}</div>
            <div class="wfr-PScity-xx2">{{arrPs.address}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios)
  export default {
    name: "city",
    data() {
      return {
        id: "",
        name: "",
        value1:"",
        PScity:[]
      }
    },
    created() {
      this.id = this.$route.params.id
      this.name = this.$route.params.name

    },
    methods:{
      WRFclick(ev){
        var api4 = `http://cangdu.org:8001/v1/pois?city_id=${this.id}&keyword=${this.value1}&type=search`;
        var api5 = `http://cangdu.org:8001/v2/pois/:geohash`
        this.axios.get(api4).then((responents)=>{
          this.PScity = responents.data
          console.log(this.PScity)
        });
        console.log(ev)
        if(this.iptDate == ""){
          alert("请地址输信息")
        }
      }
    }
  }
</script>

<style scoped>
  .wfr-one-city{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .wfr-logo-city {
    background-color: #3190e8;
    width: 100%;
    height: 1.95rem;
  }
  .wfr-logo-city-ul{
    display:flex;
    justify-content:space-around;
    justify-items:center;
    line-height:1.95rem;
  }
  .wfr-logo-text{
    height: 2rem;
    font-size:0.85rem;
    color:#fff;
    margin-left:0.8rem;
    fonyt-weight:200;
  }
  .wfr-log-city-link {
    margin-right:0.7rem;
    color: #fff;
    font-size:1rem;
    font-weight:500;
  }
  .wfr-li-text{
    color: #fff;
    font-weight:100;
    font-size:0.7rem;
    margin-left:0.2rem;
  }
  .wfr-ipt-local{
    height: 4.9rem;
    background-color:#fff;
    position:relative;
    margin-bottom:0.5rem;
  }
  .wfr-city-btn{
    background-color:#fff;
    margin:0 0 0.6rem 5%;
    text-align:center;
    color:#fff;
    width: 90%;
    height: 1.5rem;
    line-height:1.5rem;
    border-radius:0.15rem;
    background-color:#3190e8;
    font-weight:100;
  }
  .wfr-ipt-local span{
    color:#3190e8;
    font-size:1rem;
    font-weight:200;
    position:absolute;
    top:0.7rem;
    right:1.2rem;
    outline:none;
  }
  .wfr-PScity-xx1{
    font-size:0.6rem;
    font-weight:300;
    margin:0.8rem 0.9rem 0;
  }
  .wfr-PScity-xx2{
    color:#999;
    font-size:0.2rem;
    font-weight:100;
    margin:0.5rem 0.9rem 0;
  }
  .wfr-logo-city-ul2{
    background-color:#fff;
  }
  .wfr-logo-city-ul2 li{
    border-bottom:1px solid #ccc;
  }
  .wfr-ipt-ps{
    margin:0.5rem 0.5rem 0.4rem 5%;
    width: 90%;
    font-size:0.67rem;
    font-weight:200;
    outline:none;
    transform: scaleY(0.85);
  }
  .wfr-Search-history{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
</style>
