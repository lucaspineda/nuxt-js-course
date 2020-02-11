<template>
  <div class="posts-pages">
    <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  }
}
</script>

<style scoped>
.post-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>