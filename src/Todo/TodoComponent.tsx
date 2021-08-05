import { inject, observer } from "mobx-react";
import * as React from "react";
import TodoList from "./TodoList";
import TodoStore from "./TodoStore";

@inject("TodoStore")
@observer
export default class TodoComponent extends React.Component<
  { TodoStore?: TodoStore },
  {
    Title: string;
    Completed: boolean;
    Id: number|null;
    UserId: number;
    todoError: Error | null;
  }
> {
  constructor(props: { TodoStore?: TodoStore; } | Readonly<{ TodoStore?: TodoStore; }>) {
    super(props);
    this.state = {
      Title: "",
      Completed: false,
      Id: 1,
      UserId: 1,
      todoError: null,
    };
    this.addTodo = this.addTodo.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onIsCompleteChange = this.onIsCompleteChange.bind(this);
    this.onUserIdChange = this.onUserIdChange.bind(this);
  }

  async addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await this.props.TodoStore?.addTodo(
      this.state.Title,
      (this.props.TodoStore.Todos.length+1),
      this.state.UserId,
      this.state.Completed
    );
    this.setState({ Title: "", Completed: false, UserId: 1, Id:1});
  }

  onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
      console.log(event.target.value)
    this.setState({ Title: event.target.value });
  }

  onIsCompleteChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ Completed: event.target.checked });
  }

  onUserIdChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ UserId: parseInt(event.target.value) });
  }

  render() {
    let todos = this.props.TodoStore?.getTodos() || [];

    return (
      <div className="container">
        {this.state.todoError?.message ? (
          <div className="alert alert-danger" role="alert">
            Some error occured
          </div>
        ) : null}
        <h2>Create Todo List</h2>
        <form onSubmit={this.addTodo}>
            <div className="form-group">
                <label htmlFor="title">Todo</label>
                <input id="title" type="text" className="form-control" placeholder="Todo name"/>
            </div>
            <div className="form-group">
                <label htmlFor="completed">Email address</label>
                <input id="completed" type="checkbox" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="userId">UserId</label>
                <input id="userId" type="text" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <hr></hr>
        <div className="mt-20">
          <TodoList Todos={todos} />
        </div>
      </div>
    );
  }
}
