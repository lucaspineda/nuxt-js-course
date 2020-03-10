<template>
  <div class="posts-pages">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
export default {
  middleware: 'log',

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
}
</script>

<style scoped>
.post-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>