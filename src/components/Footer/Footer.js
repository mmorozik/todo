/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import PropTyps from 'prop-types'

import './Footer.css'

import TasksFilter from '../TasksFilter'

export default class Footer extends Component {
  render() {
    const { count, stateBtn, onFilter, onClear } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{count} items left</span>
        <TasksFilter stateBtn={stateBtn} onFilter={(key) => onFilter(key)} />
        <button onClick={onClear} className="clear-completed">
          Clear completed
        </button>
      </footer>
    )
  }
}

Footer.propTyps = {
  count: PropTyps.number,
  stateBtn: PropTyps.arrayOf(PropTyps.object),
  onFilter: PropTyps.func.isRequired,
  onClear: PropTyps.func.isRequired,
}

Footer.defaultProps = {
  count: 0,
  stateBtn: [{}],
}
