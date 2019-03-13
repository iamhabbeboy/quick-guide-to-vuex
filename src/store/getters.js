export default {
  findBlogById: (state, getters) => (id) => {
    return state.blogs.find(blog => blog.id === id)
  }
}
