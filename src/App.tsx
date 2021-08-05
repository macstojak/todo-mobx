import {Provider} from "mobx-react";
import React from 'react';
import TodoComponent from "./Todo/TodoComponent";
import TodoStore from "./Todo/TodoStore"
import TodoSummary from "./Todo/TodoSummary";

class App extends React.Component<{},{}> {
  private todoStore: TodoStore;

  constructor(props: {} | Readonly<{}>){
    super(props);
    this.todoStore = new TodoStore();
  }

  componentDidMount(){
    
  }

  render(){
    return (
    <div className="container w-80">
      <h1>TodoApp</h1>
      <Provider TodoStore={this.todoStore}>
        <TodoComponent></TodoComponent>
        <TodoSummary></TodoSummary>
      </Provider>
    </div>
  );
}
}

export default App;
