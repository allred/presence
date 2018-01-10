import randomcolor from 'randomcolor'
let nextPlayerId = 0
let brainCountStart = 0
export const addPlayer = (text) => {
  let bgColor = randomcolor({
    luminosity: 'light',
  })
  return {
    type: 'ADD_PLAYER',
    id: nextPlayerId++,
    text: text,
    brainCount: brainCountStart,
    bgColor: bgColor,
  }
}

export const resetScore = () => {
  return {
    type: 'RESET_SCORE',
  }
}

export const addBrain = (id) => {
  return {
    type: 'ADD_BRAIN',
    id
  }
}

export const minusBrain = (id) => {
  return {
    type: 'MINUS_BRAIN',
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const togglePlayer = (id) => {
  return {
    type: 'TOGGLE_PLAYER',
    id
  }
}

