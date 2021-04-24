import React from "react";
import "./TodoList.scss";
import Todo from "./TodoItem/TodoItem";

const TodoList = (props) => {
  const deleteHandler = (id) => {
    const todos = [...props.todos];
    todos.splice(id, 1);
    props.setTodos(todos);
  };
  const completeHandler = (id) => {
    const todos = [...props.todos];
    const todo = todos[id];

    todo.completed = !todo.completed;
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
            completeHandler={() => completeHandler(index)}
            complete={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
