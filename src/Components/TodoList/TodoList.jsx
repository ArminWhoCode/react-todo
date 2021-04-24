import React from "react";
import Todo from "./TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <div className="Todo__list">
      <ul>
        {props.todos.map((todo, index) => (
          <Todo key={index} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
