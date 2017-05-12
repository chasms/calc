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
      <div className='console'>
        <h1>{this.props.value}</h1>
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
