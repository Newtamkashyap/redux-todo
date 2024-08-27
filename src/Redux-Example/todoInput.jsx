import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

const TodoInput = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = inputRef.current.value;
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      inputRef.current.value = "";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new task"
        ref={inputRef}
        onKeyPress={handleKeyPress}
      />
      <button className="btn btn-primary" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
