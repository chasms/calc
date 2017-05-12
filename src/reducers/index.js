// module imports
// import { combineReducers } from 'redux'

export default function reducer(state = {
  stack: [],
  value: 0,
  console: 0,
  decimal: false
}, action){
  switch (action.type) {
    case 'CLEAR':
      return {
        ...state,
        console: 0
      }
    case 'CLEAR_ALL':
      return {
        stack: [],
        value: 0,
        console: 0
      }
    case 'NEGATIVE':
      return {
        ...state,
        console: (0 - state.console)
      }
    case 'PERCENT':
      return {
        ...state,
        console: (state.console / 100)
      }
    case 'DIVIDE':
    return {
      ...state,
      stack: [...state.stack, state.console, '÷'],
      console: 0,
      value: evaluate(state)
    }
    case 'MULTIPLY':
    return {
      ...state,
      stack: [...state.stack, state.console, '×'],
      console: 0,
      value: evaluate(state)
    }
    case 'SUBTRACT':
    return {
      ...state,
      stack: [...state.stack, state.console, '−'],
      console: 0,
      value: evaluate(state)
    }
    case 'ADD':
      return {
        ...state,
        stack: [...state.stack, state.console, '+'],
        console: 0,
        value: evaluate(state)
      }
    case 'DECIMAL':
      return {
        ...state,
        decimal: true
      }
    case 'EVALUATE':
      let value = evaluate(state)
      return {
        ...state,
        stack: [],
        console: value,
        value: value
      }
    case 'NUM':
      return { ...state, console: (state.console * 10 + action.payload) }
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
