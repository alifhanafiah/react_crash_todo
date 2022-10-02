import React, { Component } from 'react';

export class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.title);

    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form action="" style={{ display: 'flex' }} onSubmit={this.submit}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button type="submit" className="btn" style={{ flex: '1' }}>
          SUBMIT
        </button>
      </form>
    );
  }
}

export default AddTodo;
