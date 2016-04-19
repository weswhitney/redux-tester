import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo } from '../actions'

const Todos = ({todos, dispatch}) => (
  <div className="container">
    <h1 className="text-center">Todos</h1>
    <NewTodo onChange={e => {
      if(e.keyCode == 13){
        dispatch(addTodo(e.target.value))
        e.target.value = ''
      }
    }}/>
    {todos.map((todo, index) => <p key={index}>{todo} <button className="btn btn-primary" onClick={e => {
      dispatch(deleteTodo(index))
    }}>delete</button></p>)}
  </div>
)

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)
