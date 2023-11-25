import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
export const TodoItems = ({no,text,display}) => {
    console.log(text)
    
  return (
    <div className="container d-flex">
      <Form>
        <Form.Check label={text}/>
      </Form>
    </div>
  );
};

export default TodoItems
