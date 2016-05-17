import React from 'react';

const Todo = (props) => {
  return (
    <div className="todo">
      <h1><i className="fa fa-birthday-cake fa-2x" aria-hidden="true"></i><br />{props.params.todoPage}</h1>
      <p>Not part of the assessment.</p>
    </div>
  );
};

export default Todo;
