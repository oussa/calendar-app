import uuid from 'uuid/v4'

export const addReminder = (day, text) => ({
  type: 'ADD_REMINDER',
  day,
  text,
  id: uuid()
})
