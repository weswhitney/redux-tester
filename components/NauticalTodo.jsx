import React from 'react'
import { connect } from 'react-redux'

const NauticalTodo = ({onClick}) => (
  <div>
    <button onClick={onClick} >Nauticalize</button>
  </div>
)

export default NauticalTodo
