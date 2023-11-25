import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/TodoApp.css";
import { useEffect, useRef, useState } from "react";
import TodoItems  from "./TodoItems";

let count = 0;
export const TodoApp = () => {

  const [todos,setTodos] = useState([]);
  const inputRef = useRef(null);

  const add=()=>{
    setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
    inputRef.current.value = "";
  }
  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
  },[]);
  useEffect(()=>{
    setTimeout(() => {
      localStorage.setItem("todos",JSON.stringify(todos))
    }, 500);
    console.log(todos);
  },[todos]);

  return (
    <div id="addTodo" className="container rounded-4 bg-danger-subtle p-3">
      <div className=" d-flex justify-content-center">

      <Form className="m-2 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={inputRef} type="text" placeholder="Todo" />
        </Form.Group>
      </Form>
      <Button onClick={()=>{add()}} className="m-2">Add</Button>
      </div>
      <div>
        {todos.map((item,index)=>{
          return <TodoItems key={index} no={item.no} text={item.text} display={item.display}/>
        })}
      </div>
            
    </div>
    
  );
};

export default TodoApp;
