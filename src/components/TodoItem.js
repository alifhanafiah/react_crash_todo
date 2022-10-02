import React, { Component } from 'react';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.selesai.bind(this, id)} />{' '}
          {title}
          <button style={btnStyle} onClick={this.props.hapus.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  float: 'right',
  backgroundColor: 'red',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  cursor: 'pointer',
};

export default TodoItem;
