import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
// import mutation from '@/store/mutation'

describe('Add.vue', () => {
  it('has img', () => {
    const img = 'img'
    const wrapper = mount(Home)
    expect(wrapper.contains(img)).to.equal(true)
  })
})
