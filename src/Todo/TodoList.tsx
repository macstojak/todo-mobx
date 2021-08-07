import {observer} from "mobx-react";
import React, {useContext, useState} from "react";
import {TodoStoreContext} from "./TodoStore";
import Todo from "./TodoModel";
import {greenTick, redCross} from "./utils";

const TodoElement = observer(({todo}:any) =>{
    const [editable,setEditable] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const todoSt = useContext(TodoStoreContext);

    const clickTodo = (id:string) =>{
        todoSt.toggleTodo(id)
    }

    const editTodo = (todo:Todo)=>{
        const newTodo = {...todo, inputValue}
        todoSt.editTodo(newTodo);
        setEditable(false);
    }

    const deleteTodo = (id:string) =>{
        todoSt.deleteTodo(id);
    }

    const onEnterEdit = (e: React.KeyboardEvent<HTMLInputElement>):any =>{
        if(e.key==="Enter"){
            const newTodo = {...todo, title:inputValue};
            editTodo(newTodo);
        }
    }

    return( 
        <React.Fragment>
            {
                todo&&todo.title
                ?
                <li className="list-group-item">
                        {
                            editable
                            ?
                            <input type="text" className="title" onBlur={()=>editTodo(todo)} onKeyPress={(e)=>onEnterEdit(e)} onChange={(e)=>setInputValue(e.target.value)} value={inputValue}></input>
                            :
                            <p style={{display: "unset"}} onClick={()=>setEditable(true)}>{todo.title}</p>
                        }
                        <span onClick={()=>clickTodo(todo.id)}>
                            {todo.completed?greenTick:redCross}
                        </span>
                        <button onClick={()=>deleteTodo(todo.id)} style={{float:"right"}} className="btn btn-outline-dark">X</button>
                </li>
                :
                null
            }
        </React.Fragment>
    )
})

const TodoList = () =>{
    const todoSt = useContext(TodoStoreContext);
    const todos = todoSt.getTodos();

    return(
            <div className="container w-70">
                <h4>My todos list</h4>
                {
                todos===undefined||todos.length===0
                ?
                (<div>Please add more todos</div>)
                :
                (
                <div>
                    
                    <ul className="list-group">
                    {
                        todos.map((todo:Todo)=>{
                            return <TodoElement key={todo.id} todoSt={todoSt} todo={todo}/>
                        })
                    }
                    </ul>
            </div>
            )
            }   
        </div>    
        )
    }

export default observer(TodoList);