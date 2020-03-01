<template>
  <div class="posts-pages">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
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