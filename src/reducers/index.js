// module imports
// import { combineReducers } from 'redux'

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
      return {
        stack: [],
        console: value,
        value: value,
        decimal: 0
      }
    case 'NUM':
      if (state.decimal === 0) {
        return {
          ...state,
          console: (state.console * 10 + action.payload)
        }
      } else if (state.decimal <= -10) {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          console: (state.console + (action.payload * Math.pow(10, state.decimal))),
          decimal: (state.decimal - 1)
        }
      }
    default:
      return state
  }
}

function evaluate(state) {
  if (state.stack.length === 2) {
    state.value = state.stack[0]
  }
  switch (state.stack[state.stack.length - 1]) {
    case '+':
      return state.value + state.console
    case '-':
      return state.value - state.console
    case '÷':
      return state.value / state.console
    case '×':
      return state.value * state.console
    default: return state.value
  }
}
