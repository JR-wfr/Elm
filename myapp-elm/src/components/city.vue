<template>
  <div>
    <div>{{name}}</div>
  </div>
</template>

<script>
  export default {
    name: "city",
    data() {
      return {
        id: "",
        name:"",
      }
    },
    created() {
      this.id =  this.$route.params.id
      this.name = this.$route.params.name
    }
  }
</script>

<style scoped>

</style>
