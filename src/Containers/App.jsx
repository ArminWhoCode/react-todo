import React, { useState } from "react";
import "./App.scss";

//import components
import Form from "../Components/Form/Form";
import TodoList from "../Components/TodoList/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1 className="App__header">React Todo List</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      {todos 
        ?<TodoList todos={todos} setTodos={setTodos} />
        : null}
    </div>
  );
}

export default App;
