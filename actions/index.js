export function addTodo(todo){
  return {
    type: 'addTodo',
    todo
  }
}

export function deleteTodo(index){
  return {
    type: 'deleteTodo',
    index
  }
}

export function nauticalTodo(todo){
  return {
    type: 'nauticalTodo',
    todo
  }
}
