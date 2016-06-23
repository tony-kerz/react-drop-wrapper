import test from 'ava'
import React from 'react'
import {mount} from 'enzyme'
import Drop from '../src'
//import debug from 'debug'
//import stringify from 'json-stringify-safe'

//const dbg = debug('test')

test.beforeEach(t => {
  const wrapper = mount(
    <Drop>
      <div>target</div>
      <div>content</div>
    </Drop>
  )
  t.context.wrapper = wrapper
})

// https://github.com/avajs/ava/issues/931
test('should kinda work', t => {
  const {wrapper} = t.context
  const dropTargetWrapper = wrapper.find('.drop-target')
  t.is(dropTargetWrapper.length, 1)
  t.true(dropTargetWrapper.hasClass('drop-target'))
  // the following doesn't work. tried mouseenter, mouseover, as well.
  // http://stackoverflow.com/questions/37981798/can-i-test-that-a-css-class-is-added-by-a-simulated-event-using-enzyme
  //dropTargetWrapper.simulate('focus')
  //t.true(dropTargetWrapper.hasClass('drop-enabled'))
})
