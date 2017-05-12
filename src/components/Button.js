// std library imports
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Button extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(type) {
    switch (type) {
      case 'AC':

        break;
      default:

    }
  }

  render() {
    return (
      <div
        className={'button' + (this.props.type === '0' ? ' button-0' : '') }
        onClick={this.handleClick.bind(null, this.props.type)}
      >
        <h1>{this.props.type}</h1>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Button)
