import React from "react";
import "./Form.scss";

const Form = (props) => {
  const inputTextChangeHandler = (event) => {
    props.setInputText(event.target.value);
  };
  return (
    <form>
      <input
        type="text"
        onChange={inputTextChangeHandler}
        value={props.inputText}
      />
      <button type="submit">
        <i className="fa fa-plus-square fa-lg"></i>
      </button>
    </form>
  );
};

export default Form;
