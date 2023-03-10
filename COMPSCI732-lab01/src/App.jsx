import AboutMe from "./AboutMe";
import ToDoList from "./TodoList"
import LightBulb from "./LightBulb"

function App() {
  return (
    <div>
      <h1>About me</h1>
      {/* TODO: Add your AboutMe component here */<AboutMe name = "Zihui Yang" age = "21" favorite_food = "pizza and noodle" />}
      <h1>Todo List</h1>
      {<ToDoList items={["Finish lecture", "Do homework", "Sleep"]} />}
      
      <h1>My light bulb</h1>
      {/* TODO: Add your LightBulb component here */}
      {<LightBulb/>}

      <h1>My todos</h1>
      {/* TODO: Add your todo list here */}

    </div>
  );
}

export default App;






















