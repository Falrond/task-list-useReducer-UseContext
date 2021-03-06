import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoProvider } from './todo_context';

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,

  document.getElementById('root')
);
