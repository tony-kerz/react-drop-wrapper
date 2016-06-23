import {expect} from 'chai'
import React from 'react'
import {mount} from 'enzyme'
import Drop from '../src'

describe('Drop', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(
      <Drop>
        <div>target</div>
        <div>content</div>
      </Drop>
    )
  })

  it('should kinda work', () => {
    const dropTargetWrapper = wrapper.find('.drop-target')
    expect(dropTargetWrapper).to.have.length(1)
    expect(dropTargetWrapper.hasClass('drop-target')).to.equal(true)
    // http://stackoverflow.com/questions/37981798/can-i-test-that-a-css-class-is-added-by-a-simulated-event-using-enzyme
    //dropTargetWrapper.simulate('mouseover')
    //expect(dropTargetWrapper.hasClass('drop-enabled')).to.equal(true)
  })

})
