import React from 'react';
import TodoItem from './TodoItem.js';

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        selesai={this.props.selesai}
        hapus={this.props.hapus}
      />
    ));
  }
}

export default Todos;
