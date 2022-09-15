import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TaskList.css'

import Task from '../Task'

export default class TaskList extends Component {
  render() {
    const { todos, onDeleted, onComplited, viewList } = this.props

    const elements = todos.map((item) => {
      const { key, condition } = item
      let editForm
      if (item.condition === 'editing') {
        editForm = <input type="text" className="edit" value={this.state.value} onChange={this.handleChange} />
      }
      if (viewList === 'Active') {
        if (item.condition === '') {
          return (
            <li key={key} className={condition}>
              <Task {...item} onComplited={() => onComplited(key)} onDeleted={() => onDeleted(key)} />
              {editForm}
            </li>
          )
        }
      } else if (viewList === 'Completed') {
        if (item.condition === 'completed') {
          return (
            <li key={key} className={condition}>
              <Task {...item} onComplited={() => onComplited(key)} onDeleted={() => onDeleted(key)} />
              {editForm}
            </li>
          )
        }
      } else {
        return (
          <li key={key} className={condition}>
            <Task {...item} onComplited={() => onComplited(key)} onDeleted={() => onDeleted(key)} />
            {editForm}
          </li>
        )
      }
    })

    return <ul className="todo-list">{elements}</ul>
  }
}

Task.defaultProps = {
  viewList: 'All',
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDeleted: PropTypes.func.isRequired,
  onComplited: PropTypes.func.isRequired,
  viewList: PropTypes.string,
}
