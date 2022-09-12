import React from "react";

const Task = ({ label, time, condition }) => {

    

    return (
        <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
                <span className="description">{ label }</span>
                <span className="created">created { time } ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    )
}

export default Task;