const player = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      console.log('addplayer')
      return {
        id: action.id,
        text: action.text,
        completed: false,
        brainCount: action.brainCount,
      }
    case 'ADD_BRAIN':
      console.log({add_brain: state})
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, { 
        brainCount: state.brainCount + 1
      })
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
    case 'ADD_BRAIN':
      return state.map(a =>
        player(a, action)
      )
    case 'TOGGLE_PLAYER':
      return state.map(t =>
        player(t, action)
      )
    default:
      return state
  }
}

export default players 
