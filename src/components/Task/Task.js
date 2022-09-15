import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

export default class Task extends Component {
  render() {
    const { label, dateNow, onDeleted, onComplited } = this.props

    const updateTime = () => {
      const time = formatDistanceToNow(dateNow, { includeSeconds: true })
      return `created ${time} ago`
    }

    return (
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description" onClick={onComplited}>
            {label}
          </span>
          <span className="created">{updateTime()}</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
    )
  }
}

Task.defaultProps = {
  label: 'Not a label',
  dateNow: new Date(),
}

Task.propTypes = {
  label: PropTypes.string,
  onDeleted: PropTypes.func.isRequired,
  onComplited: PropTypes.func.isRequired,
}
