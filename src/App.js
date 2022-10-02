import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import Todos from './components/Todos.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, title: 'Buang sampah', completed: false },
        { id: 2, title: 'Makan malam', completed: false },
        { id: 3, title: 'meeting', completed: false },
      ],
    };
  }

  selesai = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  hapus = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };

  addTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Date.now(),
          title,
          completed: false,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            selesai={this.selesai}
            hapus={this.hapus}
          />
        </div>
      </div>
    );
  }
}

export default App;
