<template>
  <div class="wfr-one-city">
    <div class="wfr-logo-city">
      <ul>
        <li><router-link to="/" class="wfr-log-city-link"><</router-link></li>
        <li class="wfr-logo-text">{{name}}</li>
        <li><router-link to="/" class="wfr-li-text">切换城市</router-link></li>
      </ul>
      <div class="wfr-ipt-local">
        <input type="text" placeholder="输入学校、商务楼、地址" v-model="iptDate">
        <button class="wfr-city-btn" @click="WRF-click">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
  var api4 = "http://cangdu.org:8001/v1/pois"
  export default {
    name: "city",
    data() {
      return {
        id: "",
        name: "",
        iptDate:null,
        PScity:{}
      }
    },
    created() {
      this.id = this.$route.params.id
      this.name = this.$route.params.name
      this.axios(api4).then((responents)=>{
        console.log(responents.data)
      })
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
  .wfr-logo-city ul{
    display:flex;
    justify-content:space-around;
    justify-items:center;
    line-height:1.95rem;
  }
  .wfr-logo-text{
    height: 2rem;
    font-size:0.9rem;
    color:#fff;
    margin-left:0.8rem;
  }
  .wfr-log-city-link {
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
    background-color:#fff;
  }
  .wfr-ipt-local input{
    margin:0.5rem 0.5rem 0.4rem 5%;
    border-radius: .1rem;
    width: 90%;
    height: 1.4rem;
    border:1px solid #ccc;
    font-size:0.67rem;
    font-weight:200;
    outline:none;
  }
  .wfr-city-btn{

  }
</style>
