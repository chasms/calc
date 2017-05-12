// module imports
// import { combineReducers } from 'redux'

export default function reducer(state = {
  stack: [],
  value: 0,
  console: 0
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
      value: (state.value / state.console)
    }
    case 'MULTIPLY':
    return {
      ...state,
      stack: [...state.stack, state.console, '×'],
      console: 0,
      value: (state.value * state.console)
    }
    case 'SUBTRACT':
    return {
      ...state,
      stack: [...state.stack, state.console, '−'],
      console: 0,
      value: (state.value - state.console)
    }
    case 'ADD':
      return {
        ...state,
        stack: [...state.stack, state.console, '+'],
        console: 0,
        value: (state.value + state.console)
      }
    case 'DECIMAL':
      return {
        ...state,
        decimal: true
      }
    case 'EVALUATE':
      return {
        ...state,
        stack: [...state.stack, state.console, '='],
        console: 0,
        value: (state.value )
      }
    case 'NUM':
      return { ...state, console: (state.console * 10 + action.payload) }
    default:
      return state
  }
}
