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

  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, { loadedPosts:
        [{
          id: '1',
          title: 'First Post',
          previewText: 'This is our first post!',
          thumbnail: 'https://www.ubuntupit.com/wp-content/uploads/2017/11/Best-Linux-Code-Editor-Top-10-Reviewed-and-Compared.jpeg'
        },
        {
          id: '2',
          title: 'second Post',
          previewText: 'This is our second post!',
          thumbnail: 'https://www.ubuntupit.com/wp-content/uploads/2017/11/Best-Linux-Code-Editor-Top-10-Reviewed-and-Compared.jpeg'
        },
        {
          id: '3',
          title: 'third Post',
          previewText: 'This is our third post!',
          thumbnail: 'https://www.ubuntupit.com/wp-content/uploads/2017/11/Best-Linux-Code-Editor-Top-10-Reviewed-and-Compared.jpeg'
        },
        ]
      })
    }, 2000)
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