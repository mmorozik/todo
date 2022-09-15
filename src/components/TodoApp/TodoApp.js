import React, { Component } from 'react'
import './TodoApp.css'

import NewTaskForm from '../NewTaskForm'
import TaskList from '../TaskList'
import Footer from '../Footer'

export default class TodoApp extends Component {
  constructor() {
    super()

    this.maxKey = 100
    this.view = 'All'

    this.state = {
      todoData: [
        { label: 'Completed task', condition: '', dateNow: new Date(), key: 1 },
        { label: 'Editing task', condition: '', dateNow: new Date(), key: 2 },
        { label: 'Active task', condition: '', dateNow: new Date(), key: 3 },
      ],
      btn: [
        { condition: true, label: 'All', key: 'All' },
        { condition: false, label: 'Active', key: 'Active' },
        { condition: false, label: 'Completed', key: 'Completed' },
      ],
    }

    this.addItem = (text) => {
      const newItem = this.createTodoItem(text)

      this.setState(({ todoData }) => {
        return {
          todoData: [...todoData, newItem],
        }
      })
    }

    this.deleteItem = (key) => {
      this.setState(({ todoData }) => {
        const index = todoData.findIndex((el) => el.key === key)
        return {
          todoData: [...todoData.slice(0, index), ...todoData.slice(index + 1)],
        }
      })
    }

    this.taskCompleted = (key) => {
      this.setState(({ todoData }) => {
        return todoData.map((el) => {
          if (el.key === key) {
            if (el.condition === 'completed') {
              el.condition = ''
            } else if (el.condition === '') {
              el.condition = 'completed'
            }
          }
          return el
        })
      })
    }

    this.taskFilter = (key) => {
      this.setState(({ btn }) => {
        return btn.map((el) => {
          if (key === el.key) {
            el.condition = true
            this.view = el.key
          } else {
            el.condition = false
          }
          return el
        })
      })
    }

    this.clearCompleted = () => {
      this.setState(({ todoData }) => {
        const newData = todoData.filter((el) => (el.condition !== 'completed' ? el : null))
        return {
          todoData: newData,
        }
      })
    }
  }

  createTodoItem(label) {
    return {
      label,
      condition: '',
      dateNow: new Date(),
      key: this.maxKey++,
    }
  }

  render() {
    const { todoData, btn } = this.state

    const notDoneCount = this.state.todoData.filter((el) => el.condition !== 'completed').length

    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <main className="main">
          <TaskList
            viewList={this.view}
            todos={todoData}
            onComplited={this.taskCompleted}
            onDeleted={this.deleteItem}
          />
          <Footer onClear={this.clearCompleted} count={notDoneCount} onFilter={this.taskFilter} stateBtn={btn} />
        </main>
      </div>
    )
  }
}
