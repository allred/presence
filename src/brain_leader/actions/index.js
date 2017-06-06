let nextPlayerId = 0
export const addPlayer = (text) => {
  return {
    type: 'ADD_PLAYER',
    id: nextPlayerId++,
    text
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

