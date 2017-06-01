let nextBrainId = 0
export const addBrain = (text) => {
  return {
    type: 'ADD_BRAIN',
    id: nextBrainId++,
    text
  }
}

