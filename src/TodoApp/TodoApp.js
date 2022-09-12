import React, { Component } from "react";
import './TodoApp.css';

import NewTaskForm from '../NewTaskForm'
import TaskList from "../TaskList";
import Footer from "../Footer";

export default class TodoApp extends Component {

    state = {
        todoData: [
            {label: 'Completed task', condition: 'completed', time: '17 seconds', key: 'Co'},
            {label: 'Editing task', condition: 'editing', time: '', key: 'Ed'},
            {label: 'Active task', condition: '', time: '5 minutes', key: 'Ac'}
        ]
    }
  
    render() {
        const { todoData } = this.state;

        return (
            <div className='todoapp'>
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm />
                </header>
                <main className="main">
                    <TaskList todos = {todoData}/>
                    <Footer />
                </main>
            </div>
        );
    };
}