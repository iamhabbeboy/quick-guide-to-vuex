<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h5>(credit: https://jsonplaceholder.typicode.com)</h5>
    <h3>Blog Posts</h3>
    <div v-if="isLoading"><i>Please wait...</i></div>
    <ul>
      <li v-for="(value, index) of blogs" style="display: block" :key="index">
        <router-link :to="{ name: 'Post', params: {id: value.id }}"><b>{{value.title}}</b></router-link>
      </li>

    </ul>
  </div>
</template>

<script>
/*eslint-disable */
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      isLoading: false
    }
  },
  async mounted () {
    if (this.$store.state.blogs.length === 0) {
      this.isLoading = true
    }
    this.$store.dispatch('loadblog').then(resp => {
      this.isLoading = false
    })
  },
  computed: {
    ...mapState(['blogs'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
