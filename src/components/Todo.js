import React from 'react';

const Todo = (props) => {
  return (
    <div className="todo main-panel">
      <i className="fa fa-birthday-cake fa-5x" aria-hidden="true"></i>
      <h1>{props.params.todoPage}</h1>
      <p>This section is not part of the assessment.</p>
    </div>
  );
};

export default Todo;
