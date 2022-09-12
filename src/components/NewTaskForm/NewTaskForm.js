import React, { Component } from "react";

import './NewTaskForm.css';

export default class NewTaskForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <input className="new-todo"
                    type='text'
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                    autoFocus
                    value={ this.state.label }>
                </input>
            </form>
        )
    }
}
