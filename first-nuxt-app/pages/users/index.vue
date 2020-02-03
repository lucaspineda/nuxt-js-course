<template>
  <div>
    <h1>this is the user page</h1>
    <input type="text" v-model="userID">
    <button @click="findUser">Find user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userID: ''
    }
  },
  methods: {
    findUser(){
      this.$router.push('/users/' + this.userID)
    }
  },

}
</script>

<style>

</style>