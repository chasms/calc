// module imports
// import { combineReducers } from 'redux'

export default function reducer(state = {
  stack: [],
  value: 0
}, action){
  switch (action.type) {
    case 'CLEAR_ALL':
      return { stack: [], value: 0 }
    case 'NEGATIVE':
      return {  }
    case 'PERCENT':
      return {  }
    case 'DIVIDE':
      return {  }
    case 'MULTIPLY':
      return {  }
    case 'SUBTRACT':
      return {  }
    case 'ADD':
      return {  }
    case 'DECIMAL':
      return {  }
    case 'EVALUATE':
      return {  }
    default:
      return state
  }
}
