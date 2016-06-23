import debug from 'debug'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Drop from 'tether-drop'
import _ from 'lodash'
import 'tether-drop/dist/css/drop-theme-arrows.css'
const dbg = debug('react-drop-wrapper')

export default class extends Component {

  // todo: fix custom validator
  // http://www.mattzabriskie.com/blog/react-validating-children
  // static propTypes = {
  //   children: (props, propName, compName) => {
  //     dbg('prop-types: children: props=%o, propName=%o, componentName=%o', props, propName, compName)
  //     // only accept two children
  //     if (React.Children.count(props) !== 2) {
  //       return new Error(`${compName} should have two children: drop-target and drop-content...`)
  //     }
  //   }
  // }

  componentDidMount() {
    dbg('cdm: props=%o, drop-target=%o, drop-content=%o', this.props, this.dropTarget, this.dropContent)
    this.drop = new Drop(
      _.extend(
        {
          target: ReactDOM.findDOMNode(this.dropTarget),
          content: ReactDOM.findDOMNode(this.dropContent),
          classes: 'drop-theme-arrows',
          position: 'right middle',
          openOn: 'hover',
          constrainToScrollParent: false
        },
        this.props.opts
      )
    )
  }

  componentWillUnmount() {
    dbg('cwu')
    this.drop.destroy()
  }

  render() {
    // http://stackoverflow.com/a/29581089/2371903
    //
    const target = React.cloneElement(this.props.children[0], {ref: (c) => this.dropTarget = c})
    const content = React.cloneElement(this.props.children[1], {ref: (c) => this.dropContent = c})

    return (
      <div>
        {target}
        {content}
      </div>
    )
  }
}
