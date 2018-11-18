import React, { Component } from "react";
import "./App.css";

function List(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo.title}
            <button
              type="button"
              onClick={() => props.deleteTodo(todo)}
              className="dltbtn"
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

class Input extends Component {
  addTodo() {
    this.props.addTodo(this.refs.newText.value);
    this.refs.newText.value = "";
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref="newText"
          className="txtbox"
          placeholder="Task"
        />
        <button type="button" className="addbtn" onClick={() => this.addTodo()}>
          Add
        </button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "tf-idf" },
        { title: "Django" },
        { title: "React" },
        { title: "Vue.js" }
      ]
    };
  }

  addTodo(value) {
    if (value !== "") {
      this.setState(state => {
        const todos = [...state.todos, { title: value }];
        return { todos };
      });
    }
  }

  deleteTodo(todo) {
    this.setState(state => {
      const todos = [...state.todos];
      const todoToDelete = todos.indexOf(todo);
      todos.splice(todoToDelete, 1);
      return { todos };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ToDoApp</h1>
        <Input addTodo={value => this.addTodo(value)} />
        <List
          todos={this.state.todos}
          deleteTodo={todo => this.deleteTodo(todo)}
        />
      </div>
    );
  }
}

export default App;
