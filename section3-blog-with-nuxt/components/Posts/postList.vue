<template>
  <section class="featured-posts">
      <PostPreview 
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://www.ubuntupit.com/wp-content/uploads/2017/11/Best-Linux-Code-Editor-Top-10-Reviewed-and-Compared.jpeg"
        title="Hello There!!!"
        previewText="Text of first post"
      />
        <PostPreview
        :is-admin="isAdmin"
        id="2"
        thumbnail="https://www.ubuntupit.com/wp-content/uploads/2017/11/Best-Linux-Code-Editor-Top-10-Reviewed-and-Compared.jpeg"
        title="Hello There!!!"
        previewText="Text of first post"
      />
        <PostPreview
        :is-admin="isAdmin"
        id="3"
        thumbnail="https://www.ubuntupit.com/wp-content/uploads/2017/11/Best-Linux-Code-Editor-Top-10-Reviewed-and-Compared.jpeg"
        title="Hello There!!!"
        previewText="Text of first post"
      />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>