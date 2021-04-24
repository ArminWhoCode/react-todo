import React from "react";
import "./Form.scss";

const Form = (props) => {
  const inputTextChangeHandler = (event) => {
    props.setInputText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (props.inputText) {
      props.setTodos([
        ...props.todos,
        { text: props.inputText, compeleted: false },
      ]);
      props.setInputText("");
    }
  };
  return (
    <form>
      <input
        type="text"
        onChange={inputTextChangeHandler}
        value={props.inputText}
      />
      <button type="submit" onClick={submitHandler}>
        <i className="fa fa-plus-square fa-lg"></i>
      </button>
    </form>
  );
};

export default Form;
