import React from "react";
import "./TodoList.scss";
import Todo from "./TodoItem/TodoItem";

const TodoList = (props) => {
  const deleteHandler = (id) => {
    const todos = [...props.todos];
    todos.splice(id, 1);
    props.setTodos(todos);
  };
  return (
    <div className="Todo__list">
      <ul>
        {props.todos.map((todo, index) => (
          <Todo
            key={index}
            text={todo.text}
            deleteHandler={() => deleteHandler(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
