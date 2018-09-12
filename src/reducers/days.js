import range from 'lodash/range'

const initialDays = range(31).map(i => ({
  day: i + 1,
  reminders: []
}))

const days = (state = initialDays, action) => {
  switch (action.type) {
    case 'ADD_REMINDER':
      console.log(state)
      return [
        ...state,
        {
          day: action.day,
          text: action.text
        }
      ]
    // case 'EDIT_REMINDER':
    //   return state.map(days =>
    //     (reminder.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state
  }
}

export default days
