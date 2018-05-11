<template>
  <div>
    <div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "vagName",
    data() {
      return {
        wfrVag:"",
        wfrVagindex:"",
        wd1:"",
        jd1:"",
        wangID:"",
      }
    },
    created(){
      this.wangID = this.$route.query.id
      this.wfrVag = this.$route.query.name;
      this.wfrVagindex = this.$route.query.index;
      // console.log(this.$route.query);
      this.jd1 = this.$route.query.jd;
      this.wd1 = this.$route.query.wd;
      var api11 = `http://cangdu.org:8001/shopping/restaurants?latitude=${this.jd1}&longitude=${this.wd1}&restaurant_category_ids[]=${this.wangID}`;
      this.axios.get(api11).then((res)=>{
        console.log(res.data)
      });
    }
  }
</script>

<style scoped>

</style>
