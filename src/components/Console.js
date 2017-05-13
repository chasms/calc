// std library imports
import React from 'react'
import { connect } from 'react-redux'

class Button extends React.Component {

  render() {
    return (
      <div className='console'>
        <p className='stack'>
          {(this.props.stack.length === 0) ? ' ' : this.props.stack.join(' ')}
        </p>
        <p className='current'>
          {(this.props.console === 0) ? (this.props.value) : (this.props.console)}
        </p>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    console: state.console,
    value: state.value,
    stack: state.stack
  }
}

export default connect(mapStateToProps)(Button)
