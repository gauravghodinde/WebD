import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import TodoApp from './components/TodoApp';



export const App = () => {
  return (
    <div>

      <Navbar/>
      
      <TodoApp/>
    </div>
  )
}


export default App
