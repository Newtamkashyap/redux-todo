import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from './todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {todo}
          <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTodo(index))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
