// std library imports
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Button extends React.Component {

  render() {
    return (
      <div className='console'>
        <h2>{this.props.stack.join(' ')}</h2>
        <h1>{(this.props.console === 0) ? (this.props.value) : (this.props.console)}</h1>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Button)
