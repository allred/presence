import React from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../actions'

let AddPlayer = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPlayer(input.value))
        input.value = ''
      }}>
      <input ref={node => {
        input = node
      }} />
      <button type="submit">
        Add Player
      </button>
      </form>
    </div>
  )
}
AddPlayer = connect()(AddPlayer)

export default AddPlayer
