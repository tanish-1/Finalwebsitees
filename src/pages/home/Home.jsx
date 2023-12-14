import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Footer from '../../components/footer/Footer';

const Home = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo }]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>  <Link to="/about">About</Link></li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-8">
        <div className="max-w-md mx-auto bg-white rounded shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Todo List</h1>

          <div className="flex mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && addTodo()}
              className="flex-1 p-2 border rounded-l"
            />
            <button onClick={addTodo} className="p-2 bg-blue-500 text-white rounded-r">
              Add
            </button>
          </div>

          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center border-b py-2">
                <span>{todo.text}</span>
                <button onClick={() => removeTodo(index)} className="text-red-500">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
