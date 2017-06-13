const player = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        brainCount: action.brainCount,
      }
    case 'TOGGLE_PLAYER':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'DELETE_PLAYER':
    default:
      return state
  }
}

const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        player(undefined, action)
      ]
    case 'TOGGLE_PLAYER':
      return state.map(t =>
        player(t, action)
      )
    default:
      return state
  }
}

export default players 
