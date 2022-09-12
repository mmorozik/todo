import React, { Component } from "react";

export default class Task extends Component {

    render() {
        const { label, time, onDeleted, onComplited } = this.props;

        return (
            <div className="view">
                <input className="toggle" type="checkbox"></input>
                <label>
                    <span 
                        className="description"
                        onClick={ onComplited }>
                        { label }
                    </span>
                    <span className="created">created { time } ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button 
                    className="icon icon-destroy"
                    onClick={ onDeleted }></button>
            </div>
        )
    }

}