import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Dropx from '../src'

test.beforeEach(t => {
  const drop = TestUtils.renderIntoDocument(
    <Dropx>
      <div>target</div>
      <div>content</div>
    </Dropx>
  )
  t.context.dropNode = ReactDOM.findDOMNode(drop)
})

test('should kinda work', t => {
  const {dropNode} = t.context
  TestUtils.Simulate.hover(dropNode)
})
