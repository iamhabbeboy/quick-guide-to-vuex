import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Add from '@/views/Add.vue'

describe('Add.vue', () => {
  it('has title label', () => {
    const html = '<label>Title</label>'
    const wrapper = mount(Add)
    expect(wrapper.html()).to.contain(html)
  })
  it('has input title', () => {
    const html = 'input'
    const wrapper = mount(Add)
    expect(wrapper.contains(html)).to.equal(true)
  })
  it('has textarea', () => {
    const textarea = 'textarea'
    const wrapper = mount(Add)
    expect(wrapper.contains(textarea)).to.equal(true)
  })
  it('has empty title data', () => {
    const wrapper = mount(Add)
    const title = ''
    expect(wrapper.vm.title).to.equal(title)
  })
  it('has empty description data', () => {
    const wrapper = mount(Add)
    const description = ''
    expect(wrapper.vm.description).to.equal(description)
  })
})
