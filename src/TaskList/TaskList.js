import React from "react";

import './TaskList.css';

import Task from "../Task";

const TaskList = ({ todos }) => {

   

    const elements = todos.map((item) => {

        let editForm;

        if (item.condition === 'editing') {
            editForm = <input type="text" className="edit" value="Editing task"></input>    
        }

        return (
            <li key={ item.key } className = {item.condition}>
                <Task { ... item }/>
                { editForm }
            </li>
        )
    });
    return (
        <ul className="todo-list">
            { elements }
        </ul>
    )
}

export default TaskList;