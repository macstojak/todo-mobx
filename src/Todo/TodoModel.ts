// export default class TodoModel {
//     id!: string;
//     completed!: boolean;
//     title!: string;
//     constructor(id: string, completed: boolean, title: string) {
//         this.id = id;
//         this.completed = completed;
//         this.title = title;
//     }
// }
export default interface TodoModel {
    id: string,
    completed: boolean,
    title: string
}