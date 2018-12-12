import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class TodoList extends Component {
  static propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      }).isRequired
    ).isRequired
  };
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <Todo
            {...todo}
            key={index}
            onClick={() => this.props.onTodoClick(index)}
          />
        ))}
      </ul>
    );
  }
}

// TodoList.propTypes = {};

export default TodoList;