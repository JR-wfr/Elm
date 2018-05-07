<template>
  <div>
    <ul class="wfr-logo-location">
      <li><i class="el-icon-search"></i></li>
      <li>{{location}}</li>
      <li>登录|注册</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "shop",
    data(){
      return {
        location:"",
      }
    },
    created() {
      this.location = this.$route.query.name
    }
  }
</script>

<style scoped>
.wfr-logo-location {
  display: flex;
  justify-content: space-around;
  justify-items: center;
}
</style>
