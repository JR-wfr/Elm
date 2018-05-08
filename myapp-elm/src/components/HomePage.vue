<template>
  <div class="body">
    <div class="heard-top">
      <span class="wfr-heard-logo">ele.me</span>
      <router-link to="/login" class="wfr-heard-register">
        <span>登录|注册</span>
      </router-link>
    </div>
    <div class="wfr-nav">
      <span class="wfr-nav1">当前定位的城市：</span>
      <span class="wfr-nav2">定位不准时，请在城市列表中选择</span>
    </div>
    <div>
      <router-link :to="{name:'city',params:{id:city.id,name:city.name}}" class="wfr-city">
        <span class="wfr-city-name">{{city.name}}</span>
        <span class="wfr-city-link">></span>
      </router-link>
    </div>
    <div>
      <h4 class="wfr-hot-city">热门城市</h4>
      <ul class="wfr-hot-link">
        <li v-for="arr in hotCity" class="wfr-hot-list">
          <router-link :to="{name:'city',params:{id:arr.id,name:arr.name}}">
            <span>
               {{arr.name}}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="wfr-all-city">
      <span class="wfr-city-text">(按字母排序)</span>
      <ul v-for="(value,key) in groupCity"  class="wfr-Part-city">
        <li class="wfr-list">
          <h4 class="wfr-all-city1">{{key}}</h4>
          <ul class="wfr-ul">
            <li v-for="arr1 in value" class="wfr-city-Port">
              <router-link :to="{name:'city',params:{id:arr1.id,name:arr1.name}}" class="wfr-all-city-list">
                {{arr1.name}}
              </router-link>
            </li>
          </ul>
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
  var api = "http://cangdu.org:8001/v1/cities?type=guess";
  var api1 = "http://cangdu.org:8001/v1/cities?type=hot";
  var api2 = "http://cangdu.org:8001/v1/cities?type=group"
  // console.log(api3)
  export default {
    name: "HomePage",
    data: function () {
      return {
        city: {},
        hotCity: [],
        groupCity: {},
        PScity:"",
      }
    },
    created() {

      this.axios.get(api).then((responets) => {
        this.city = responets.data
      }),
        this.axios.get(api1).then((responets) => {
          this.hotCity = responets.data
        }),
        this.axios.get(api2).then((responets) => {
          this.groupCity = responets.data
          console.log(this.groupCity)
          this.groupCity = objKeySort(this.groupCity)
          console.log(this.groupCity )
          function objKeySort(obj) {
            var newkey = Object.keys(obj).sort();
            var newObj = {};
            for (var i = 0; i < newkey.length; i++) {
              newObj[newkey[i]] = obj[newkey[i]];
            }
            return newObj;
          }
          console.log(this.groupCity)

        })
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .body {
    width: 100%;
    background-color: #f5f5f5;
  }
  .heard-top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  .wfr-heard-logo {
    left: .4rem;
    font-weight: 100;
    font-size: .7rem;
    color: #fff;
    width: 2.3rem;
    height: .7rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .wfr-heard-register {
    right: .55rem;
    font-size: .65rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .wfr-heard-register span {
    font-weight: 100;
  }
  .wfr-nav {
    height: 1.55rem;
    padding-top: 2.35rem;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    line-height: 1.45rem;
  }
  .wfr-nav1 {
    margin-left: 0.45rem;
    font-size: 0.55rem;
    color: #666;
    font-weight: 200;
  }
  .wfr-nav2 {
    margin-left: 1rem;
    font-weigh: 800;
    font-size: 0.55rem;
    color: #9f9f9f;
  }
  .wfr-city {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.8rem;
    padding: 0 .45rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
  }
  .wfr-city-name {
    color: #3190e8;
    font-weight: 200;
  }
  .wfr-city-link {
    color: #ccc;
  }
  .wfr-hot-city {
    background-color: #fff;
    margin-top: 0.5rem;
    padding: 0.5rem 0;
    font-size: 0.55rem;
    color: #666;
    text-indent: .45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .wfr-hot-link {
    overflow: hidden;
  }
  .wfr-hot-list {
    border-bottom: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    background-color: #fff;
    font-size: 0.2rem;
    line-height: 1.6rem;
    text-align: center;
    width: 25%;
    float: left;
  }
  .wfr-hot-list span {
    fonu-weight: 200;
    color: #3190e8;
  }
  .wfr-all-city{
    position:relative;
    margin-top:0.6rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .wfr-city-text{
    color:#999;
    font-weight:150;
    font-size:0.55rem;
    position:absolute;
    left:1.6rem;
    top:0.5rem;

  }
  .wfr-all-city1{
    border-top: 1px solid #e4e4e4;
    color: #666;
    font-size:0.55rem;
    font-weight:200;
    padding-left:0.4rem;
    line-height:1.5rem;
    text-indent: .45rem;
    border-bottom: 1px solid #e4e4e4;

  }
  .wfr-city-Port{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:0.5rem;
    line-height:1.6rem;
    text-align:center;
    width: 25%;
    float:left;
    color: #666;
    font-weight:200;
    border-bottom:1px solid #e4e4e4;
    border-right:1px solid #e4e4e4;
  }
  .wfr-list{
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    margin-bottom:0.5rem;
  }
  .wfr-ul{
    overflow: hidden;
    zoom:1;
  }
  .wfr-all-city-list{
    color:#666;
  }
</style>
