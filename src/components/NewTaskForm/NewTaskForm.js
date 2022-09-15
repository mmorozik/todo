import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  constructor() {
    super()
    this.state = {
      label: '',
    }

    this.onLabelChange = (event) => {
      this.setState({
        label: event.target.value,
      })
    }

    this.onSubmit = (event) => {
      event.preventDefault()
      this.props.onItemAdded(this.state.label)
      this.setState({
        label: '',
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.label}
        ></input>
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}
