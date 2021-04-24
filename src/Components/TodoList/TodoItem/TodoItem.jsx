import React from "react";

const Todo = (props) => {
  return (
    <div className="Todo__item">
      <li>{props.text}</li>
      <button className="compelete">
        <i className="fa fa-check"></i>
      </button>
      <button className="delete" onClick={props.deleteHandler}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
