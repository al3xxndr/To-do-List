// App.js
import React, { useState } from 'react';
import './App.css';
import TodoList from './todolist';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="todo-app">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit" class='submit-text'>Add Todo</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;


