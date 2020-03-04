<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import axios from 'axios'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    asyncData(context) {
        return axios.get('https://nuxt-blog-9edce.firebaseio.com/posts/' + context.params.postId + '.json')
            .then(res => {
            return {
                loadedPost: res.data
            }
        })
      .catch(error => context.error(e))
    },
}
</script>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}

</style>