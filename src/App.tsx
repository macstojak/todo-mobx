import TodoComponent from "./Todo/TodoComponent";

const App = () => {
    return (
    <div className="container w-80">
      <h1 style={{textAlign:"center"}}>TodoApp</h1>
        <TodoComponent></TodoComponent>   
    </div>
  );

}

export default App;
