import {observer} from "mobx-react";
import * as React from "react";
import TodoModel from "./TodoModel";

@observer
export default class TodoList extends React.Component<
    {Todos:TodoModel[]},
    {}
    >{
        render(){
            if(this.props.Todos.length===0){
                return <div>Please add more todos</div>
            }
            return(
                <div className="container">
                    <h4>My Todos</h4>
                    <ul className="list-group">
                        {this.props.Todos.map((todo,id)=>{
                            return <li key={id} className="list-group-item">{todo.title}
                                {todo.completed?(
                                    <svg
                                    width="1.4em"
                                    height="1.2em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-check-circle-fill"
                                    fill="green"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >  <path
                                  fill-rule="evenodd"
                                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                                />
                              </svg>
                                )
                                :
                                (
                                    <svg
                      width="1.4em"
                      height="1.2em"
                      viewBox="0 0 16 16"
                      className="bi bi-x-circle-fill"
                      fill="#fc2222"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        color="white"
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                      />
                    </svg>
                                )}

                            </li>
                        })}
                        
                    </ul>
                </div>
            )
        }
    }