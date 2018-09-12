import React from 'react'
import PropTypes from 'prop-types'
import Day from '#src/components/Day'
import './Calendar.scss'

const Calendar = ({ monthInWeeks, addReminder }) => (
  <div styleName="month">
    {monthInWeeks.map(week => (
      <div styleName="week">
        {week.map(day => (
          <Day
            key={day.day}
            day={day}
            onClick={() => addReminder(day.day)}
          />
        ))}
      </div>
    ))}
  </div>
)

Calendar.propTypes = {
  monthInWeeks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired).isRequired,
  addReminder: PropTypes.func.isRequired
}

export default Calendar
