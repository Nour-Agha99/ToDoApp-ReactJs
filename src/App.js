import React, { useEffect, useState } from "react";
import Nav from './components/Nav';
import Form from './components/Form';
import Card from './components/Cards';
import Background from './components/background';

function App() {

  const initialValueTodo = JSON.parse(localStorage.getItem("todo")) || []
  const [inputText, setInputText] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [todo, setTodo] = useState(initialValueTodo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  return (
    <div className="App">
      <app>ToDo-App</app>
      <Nav />
      <Form inputText={inputText} setInputText={setInputText} inputTime={inputTime} setInputTime={setInputTime} todo={todo} setTodo={setTodo} />
      <Card inputText={inputText} setInputText={setInputText} inputTime={inputTime} setInputTime={setInputTime} todo={todo} setTodo={setTodo} />
      {todo.length === 0 ? <Background /> : ''}
    </div>
  )
}

export default App;
