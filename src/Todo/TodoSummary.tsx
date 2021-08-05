import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import TodoStore from "./TodoStore";

@inject("TodoStore")
@observer
export default class TodoSummary extends Component<{ TodoStore?: TodoStore }, {}> {
    render() {
        const totalTodos = this.props.TodoStore?.Todos.length ?? 0;
        const completedTodos = this.props.TodoStore?.Todos.filter((todo) => todo.completed).length ?? 0;
        return (
            <section style={{ fontSize: 'larger' }}>
        ToDo status {totalTodos - completedTodos} Todo(s) pending from{' '}
        {totalTodos} Todo(s)
      </section>
    );
}
}