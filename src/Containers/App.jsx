import React, { useState } from "react";
import "./App.scss";

//import components
import Form from "../Components/Form/Form";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <h1 className="App__header">React Todo List</h1>
      <Form />
    </div>
  );
}

export default App;
