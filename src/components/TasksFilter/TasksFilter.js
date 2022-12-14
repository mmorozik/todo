import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TasksFilter.css'

export default class TasksFilter extends Component {
  render() {
    const { stateBtn, onFilter } = this.props

    const btn = stateBtn.map((el) => {
      const { condition, key } = el
      let status
      if (condition) status = 'selected'

      return (
        <li key={key}>
          <button onClick={() => onFilter(key)} className={status}>
            {el.label}
          </button>
        </li>
      )
    })

    return <ul className="filters">{btn}</ul>
  }
}

TasksFilter.propTypes = {
  stateBtn: PropTypes.arrayOf(PropTypes.object),
  onFilter: PropTypes.func.isRequired,
}
