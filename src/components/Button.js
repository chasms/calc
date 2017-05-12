// std library imports
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// app imports
import {
  clear,
  clearAll,
  negative,
  percent,
  divide,
  multiply,
  subtract,
  add,
  decimal,
  evaluate,
  num
} from '../actions/math'

class Button extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    switch (this.props.type) {
      case 'AC':
        if (this.props.console === 0) {
          this.props.clearAll()
        } else { this.props.clear() }
        break;
      case '+/-':
        this.props.negative()
        break;
      case '%':
        this.props.percent()
        break;
      case '÷':
        this.props.divide()
        break;
      case '×':
        this.props.multiply()
        break;
      case '−':
        this.props.subtract()
        break;
      case '+':
        this.props.add()
        break;
      case '.':
        this.props.decimal()
        break;
      case '=':
        this.props.evaluate()
        break;
      case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
        let num = parseInt(this.props.type, 10)
        this.props.num(num)
        break;
      default: return
    }
  }

  render() {
    return (
      <div
        className={'button' + (this.props.type === '0' ? ' button-0' : '') }
        onClick={this.handleClick}
      >
        <h1>{this.props.type === 'AC' ? (
          this.props.console === 0 ? 'AC' : 'C')
          : (this.props.type)}</h1>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    console: state.console
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clear: clear,
    clearAll: clearAll,
    negative: negative,
    percent: percent,
    divide: divide,
    multiply: multiply,
    subtract: subtract,
    add: add,
    decimal: decimal,
    evaluate: evaluate,
    num: num
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Button)
