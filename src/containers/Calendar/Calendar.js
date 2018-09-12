import { connect } from 'react-redux'
import { addReminder } from '#src/actions'
import Calendar from '#src/components/Calendar'
import range from 'lodash/range'

const splitInWeeks = (days) => {
  const weeks = [], size = 7;

  while (days.length > 0) {
    weeks.push(days.splice(0, size))
  }

  if (weeks.length) {
    const lastWeek = weeks[weeks.length - 1]
    if (lastWeek.length < 7) {
      const dummyDays = range(7 - lastWeek.length).map(i => ({
        day: days.length + i + 1,
        reminders: [],
        invisible: true
      }))
      weeks[weeks.length - 1] = [...lastWeek, ...dummyDays]
    }
  }
  return weeks
}

const mapStateToProps = state => ({
  monthInWeeks: splitInWeeks(state.days)
})

const mapDispatchToProps = dispatch => ({
  addReminder: (day, text) => dispatch(addReminder(day, text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)
