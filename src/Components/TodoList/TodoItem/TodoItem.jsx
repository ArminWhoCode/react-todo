import React from "react";

const Todo = (props) => {
  return (
    <div className="Todo__item">
      <li className={props.complete ? "complete" : null}>
        {props.text}
      </li>
      <button
        className={[
          "complete",
          props.complete ? "disabled" : null,
        ].join(" ")}
        onClick={props.completeHandler}
        disabled={props.complete}
      >
        <i className="fa fa-check"></i>
      </button>
      <button className="delete" onClick={props.deleteHandler}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
