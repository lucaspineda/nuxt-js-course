<template>
  <h1>a single user, with ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate(data) {
    // check if the url params are numbers
    return /^\d+$/.test(data.params.id)
 
  }

}
</script>

<style>

</style>