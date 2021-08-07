import { makeObservable, action, observable } from "mobx";
import { createContext } from "react";
import Todo from "./TodoModel";

class TodoStore {
    todos: Todo[] = observable([
        { id: "papdowapopd21)@@_", completed: false, title: "pet dog" }
    ]);

    constructor() {
        makeObservable(this, {
            todos: observable,
            getTodos: action,
            addTodo: action,
            toggleTodo: action,
            editTodo: action,
        }
        )
    }

    getTodos() {
        return this.todos;
    }

    addTodo(todo: Todo) {
        console.log("todo", todo)
        return this.todos.push(todo);
    };

    changeBool(result: boolean) {
        return !result;
    }

    toggleTodo(id: string) {
        console.log("TOGLE")
        this.todos.filter(el => {
            if (el.id === id) {
                el.completed = this.changeBool(el.completed);
            }
            return el.completed;
        })
    }

    editTodo(todo: Todo) {
        this.todos.filter(el => {
            if (todo.id === el.id) {
                return el.title = todo.title;
            }
            return el;
        })
    }

    deleteTodo(id: string) {
        this.todos.splice(this.todos.findIndex(el => el.id === id), 1);
    }

}
export const TodoStoreContext = createContext(new TodoStore());
