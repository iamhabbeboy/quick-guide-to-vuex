    <!-- eslint-disable -->
<template>
  <div>
    <div v-if="blogs">
		  <h3> {{blogs.title}} </h3>
      <p>{{blogs.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      blogs: []
    }
  },
  async mounted () {
    this.$store.dispatch('loadblog')
    const id = this.$route.params.id
    this.blogs = this.$store.getters.findBlogById(id)
  },
  computed: {
  }
}
</script>
