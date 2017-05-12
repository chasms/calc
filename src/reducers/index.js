// module imports
import Big from 'big.js'

export default function reducer(state = {
  stack: [],
  value: 0,
  console: 0,
  decimal: 0
}, action){
  switch (action.type) {
    case 'CLEAR':
      return {
        ...state,
        console: 0,
        decimal: 0
      }
    case 'CLEAR_ALL':
      return {
        stack: [],
        value: 0,
        console: 0,
        decimal: 0
      }
    case 'NEGATIVE':
      return {
        ...state,
        console: (0 - state.console),
        decimal: 0
      }
    case 'PERCENT':
      return {
        ...state,
        console: (state.console / 100),
        decimal: 0
      }
    case 'DIVIDE':
    return {
      ...state,
      stack: [...state.stack, state.console, '÷'],
      console: 0,
      value: evaluate(state),
      decimal: 0
    }
    case 'MULTIPLY':
    return {
      ...state,
      stack: [...state.stack, state.console, '×'],
      console: 0,
      value: evaluate(state),
      decimal: 0
    }
    case 'SUBTRACT':
    return {
      stack: [...state.stack, state.console, '−'],
      console: 0,
      value: evaluate(state),
      decimal: 0
    }
    case 'ADD':
      return {
        ...state,
        stack: [...state.stack, state.console, '+'],
        console: 0,
        value: evaluate(state),
        decimal: 0
      }
    case 'DECIMAL':
      if (state.decimal === 0) {
        return {
          ...state,
          decimal: -1
        }
      } else return state
    case 'EVALUATE':
      let value = evaluate(state)
      if (state.stack.length === 0 && state.value === 0) {
        value = state.console
      }
      return {
        stack: [],
        console: value,
        value: 0,
        decimal: 0
      }
    case 'NUM':
      let con = state.console
      let val = state.value
      if (state.stack.length === 0 && state.value !== 0) {
        con = 0
        val = 0
      }
      if (state.decimal === 0) {
        return {
          ...state,
          value: val,
          console: (con * 10 + action.payload)
        }
      } else if (state.decimal <= -11) {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          value: val,
          console: parseFloat(Big(10).pow(state.decimal).times(action.payload).plus(con).round(10)),
          decimal: (state.decimal - 1)
        }
      }
    default:
      return state
  }
}

function evaluate(state) {
  let val = state.value
  if (state.stack.length === 2) {
    val = state.stack[0]
  }
  switch (state.stack[state.stack.length - 1]) {
    case '+':
      return parseFloat(Big(val).plus(state.console).round(10))
    case '−':
      return parseFloat(Big(val).minus(state.console).round(10))
    case '÷':
      return parseFloat(Big(val).div(state.console).round(10))
    case '×':
      return parseFloat(Big(val).times(state.console).round(10))
    default: return state.value
  }
}
