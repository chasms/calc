export const clear = () => ({
  type: 'CLEAR'
})

export const clearAll = () => ({
  type: 'CLEAR_ALL'
})

export const negative = () => ({
  type: 'NEGATIVE'
})

export const percent = () => ({
  type: 'PERCENT'
})

export const divide = () => ({
  type: 'DIVIDE'
})

export const multiply = () => ({
  type: 'MULTIPLY'
})

export const subtract = () => ({
  type: 'SUBTRACT'
})

export const add = () => ({
  type: 'ADD'
})

export const decimal = () => ({
  type: 'DECIMAL'
})

export const evaluate = () => ({
  type: 'EVALUATE'
})

export const num = (num) => ({
  type: 'NUM',
  payload: num
})
