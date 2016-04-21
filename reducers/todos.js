import Immutable from 'immutable'

export default (state = Immutable.List(['Code More!']), action) => {
  switch(action.type) {
    case 'addTodo':
      return state.unshift(action.todo)
    case 'deleteTodo':
        return state.filter((todo, index) => index !== action.index)
    case 'nauticalTodo':
        return state.filter(action.todo)
        console.log('im clicked')
    default:
      return state
  }
}
