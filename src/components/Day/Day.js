import React from 'react'
import cx from 'classnames'

import './Day.scss'

export default function Day({ day, onClick }) {
  return (
    <div styleName="day" onClick={!day.invisible ? onClick : undefined}>
      <span styleName={cx({ 'invisible': day.invisible })}>
        {day.day}
      </span>
    </div>
  )
}
