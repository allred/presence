const player = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        brainCount: action.brainCount,
        bgColor: action.bgColor,
      }
    case 'ADD_BRAIN':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, { 
        brainCount: state.brainCount + 1
      })
    case 'MINUS_BRAIN':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, { 
        brainCount: state.brainCount - 1
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
    case 'MINUS_BRAIN':
      return state.map(m =>
        player(m, action)
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
