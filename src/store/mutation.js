export default {
  LOAD_BLOGS (state, blog) {
    state.blogs = blog
  },
  STORE_BLOGS (state, blog) {
    state.blogs.unshift(blog)
  }
}
