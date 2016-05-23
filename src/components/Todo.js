import React from 'react';
import CloseButton from './CloseButton';

const Todo = (props) =>
(
  <div className="todo main-panel">
    <i className="fa fa-birthday-cake fa-5x" aria-hidden="true"></i>
    <h1>{props.params.todoPage}</h1>
    <p>This section is not part of the assessment.</p>
    <CloseButton />
  </div>
);

Todo.propTypes = {
  params: React.PropTypes.string.isRequired
};

export default Todo;
