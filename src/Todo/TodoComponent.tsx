import {action} from "mobx";
import { observer, } from "mobx-react";
import React, {useState, useContext} from "react";
import {v4 as uuidv4} from "uuid";
import TodoList from "./TodoList";
import {TodoStoreContext} from "./TodoStore";

   
  const TodoComponent  = () => {
    let [title, setTitle] = useState("");
    let [completed, setCompleted] = useState(false);
    
    const todoSt = useContext(TodoStoreContext);    

    const addTodo = (e: React.FormEvent) =>{
      e.preventDefault();
      todoSt.addTodo({title, completed, id:uuidv4()});
      setTitle("");
      setCompleted(false);
    }
  
    return (
      <div className="container">
        <h2>Create new todo</h2>
        <form>
            <div className="form-group">
                <label htmlFor="title">Todo</label>
                <input id="title" type="text" className="form-control" placeholder="Todo name" onChange={(e)=>setTitle(e.currentTarget.value)} value={title}/>
            </div>
            <div className="form-check">
               <input id="completed" type="checkbox" className="form-check-input" onChange={()=>setCompleted(!completed)} checked={completed}/>
               <label className="form-check-label" htmlFor="completed">Completed? </label>
            </div>
            
            <button type="submit" onClick={action(e=>addTodo(e))} className="btn btn-primary">Submit</button>
        </form>
        <hr></hr>
        <div className="mt-20">
          
          
        <TodoList/>
        </div>
      </div>
    );
  }

export default observer(TodoComponent);
