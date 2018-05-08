<template>

</template>

<script>
  export default {
    name: "fooddetails",
    data(){
      return{
        data:"",
      }
    },
    created() {
      this.data = this.$route.params
      console.log(this.data)
    }
  }
</script>

<style scoped>

</style>
