import { action, configure, observable } from "mobx";
import TodoModel from "./TodoModel";

configure({ enforceActions: "always" });

export default class ToDoStore {
    @observable Todos: TodoModel[] = [];

    private todoApi = "https://jsonplaceholder.typicode.com/todos";

    @action.bound async init() {
        let response = await fetch(this.todoApi);
        let newTodos: TodoModel[] = await response.json();
        this.addTodoStore(newTodos);
    }

    @action.bound addTodoStore(Todos: TodoModel[]) {
        for (let todo of Todos) {
            this.Todos.push(todo);
        }
    }

    @action.bound getTodos() {
        return this.Todos;
    }

    @action.bound async addTodo(title: string, id: number, userId: number, completed: boolean) {
        await fetch(this.todoApi, {
            method: "POST",
            body:
                JSON.stringify({
                    title,
                    id,
                    userId,
                    completed
                }),

            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => this.addNewTodoToStore(json));
    }

    @action.bound async addNewTodoToStore(todo: TodoModel) {
        this.Todos.push(todo);
    }

}