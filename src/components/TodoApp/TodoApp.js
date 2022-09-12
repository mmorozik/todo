import React, { Component } from "react";
import './TodoApp.css';

import NewTaskForm from '../NewTaskForm'
import TaskList from "../TaskList";
import Footer from "../Footer";

export default class TodoApp extends Component {

    maxKey = 100;
    view = 'All';

    state = {
        todoData: [
            {label: 'Completed task', condition: '', time: '17 seconds', key: 1},
            {label: 'Editing task', condition: '', time: '7 minutes', key: 2},
            {label: 'Active task', condition: '', time: '5 minutes', key: 3}
        ],
        btn: [
            {condition: true, label: 'All', key: 'All'},
            {condition: false, label: 'Active', key: 'Active'},
            {condition: false, label: 'Completed', key: 'Completed'}
        ]
    }

    createTodoItem(label) {
        return {
            label,
            condition: '',
            time: '0 seconds',
            key: this.maxKey++
        }
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)

        this.setState(({ todoData }) => {
            return {
                todoData: [
                    ...todoData,
                    newItem
                ]
            }
        })
    }

    deleteItem = (key) => {
        
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.key === key)
            return {
                todoData: [
                    ...todoData.slice(0, index),
                    ...todoData.slice(index + 1)
                ]
            }
        })
    }

    taskCompleted = (key) => {

        this.setState(({ todoData }) => {
            return todoData.map( (el) => {
                if (el.key === key) {
                    if (el.condition === 'completed') {
                        el.condition = '';
                    } else if (el.condition === '') {
                        el.condition = 'completed';
                    };
                }
                return el;
            });
        })
    }

    taskFilter = (key) => {
        this.setState(({ btn }) => {
            return btn.map(((el) => {
                if (key === el.key) {
                    el.condition = true
                    this.view = el.key;
                } else {
                    el.condition = false
                }
                return el;
            }))
        })
    }

    clearCompleted = () => {
        this.setState(({ todoData }) => {
            const newData = todoData.filter((el) => el.condition !== 'completed' ? el : null)
            return {
                todoData: newData
            }
        })
    }
  
    render() {
        const { todoData, btn } = this.state;


        const notDoneCount = this.state.todoData
                        .filter((el) => el.condition !== 'completed').length;
        

        return (
            <div className='todoapp'>
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm onItemAdded={ this.addItem }/>
                </header>
                <main className="main">
                    <TaskList 
                        viewList = { this.view }
                        todos = { todoData }
                        onComplited={ this.taskCompleted }
                        onDeleted={ this.deleteItem}/>
                    <Footer 
                        onClear= { this.clearCompleted }
                        count={ notDoneCount }
                        onFilter={ this.taskFilter }
                        stateBtn={ btn }/>
                </main>
            </div>
        );
    };
}