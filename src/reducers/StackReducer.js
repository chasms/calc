export default function Stack(state = {
  stack: [],
  value: 0
}, action){
  switch (action.type) {
    case 'CLEAR_ALL':
      return { stack: [], value: 0 }
    case 'NEGATIVE':
      return { [...state, ] }
    default:
      return state
  }
}
