import React from 'react'
import { connect } from 'react-redux'
import { addBrain } from '../actions'

let AddBrain = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addBrain(input.value))
        input.value = ''
      }}>
      </form>
      <input ref={node => {
        input = node
      }} />
      <button type="submit">
        Add Player
      </button>
    </div>
  )
}
AddBrain = connect()(AddBrain)

export default AddBrain
