    <!-- eslint-disable -->
<template>
  <div class="about">
    <h1>Add Post</h1>
    <form method="post" @submit.prevent="post">
    	<div>
	    	<label>Title</label>
	    	<input type="text" name="" v-model="title" required>
	    </div>
	    <div>
	    	<label>Description</label>
	    	<textarea v-model="description" required></textarea>
	    </div>
	    <div>
	    	<button type="submit">Submit</button>
	    </div>

    </form>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
export default {
  name: 'Add',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    post (e) {
      const title = this.title
      const description = this.description
      const payload = { title: title, body: description, userId: 100 }
      this.$store.dispatch('storepost', payload)
        .then(response => {
          this.$router.push('/')
        })
    }
  }
}
</script>
