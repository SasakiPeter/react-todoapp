import React, { Component } from 'react';
import './App.css';

function List(props) {
  return (
    <ul>
      {props.todo.map((todo, i) => {
        return (
          <li key={i}>{todo.title}<input type="button" value="delete" onClick={() => props.deleteTodo(i)} className="dltbtn" /></li>
        )
      })}
    </ul>
  )
};

class Input extends Component {
  addTodo() {
    this.props.addTodo(this.refs.newText.value);
    this.refs.newText.value = ''
  }

  render() {
    return (
      <div>
        <input type="text" ref="newText" className="txtbox" placeholder="Task" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <input type="button" value="Add" className="addbtn" onClick={() => this.addTodo()} />
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { title: 'ti-idf' },
        { title: 'Django' },
        { title: 'React' },
        { title: 'Vue.js' }
      ]
    };
  }

  addTodo(value) {
    if (value === "") {
      return;
    }
    this.state.todo.push(
      { title: value }
    );
    this.setState({
      todo: this.state.todo
    });
  }

  deleteTodo(i) {
    //splice()の第一引数は削除する配列の開始位置、第二引数は削除する数
    this.state.todo.splice(i, 1);
    this.setState({
      todo: this.state.todo
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ToDoApp</h1>
        <Input addTodo={(value) => this.addTodo(value)} />
        <List todo={this.state.todo} deleteTodo={(i) => this.deleteTodo(i)} />
      </div>
    );
  }
}

export default App;