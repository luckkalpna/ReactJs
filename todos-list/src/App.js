// import logo from './logo.svg';
import About from "./About";
import "./App.css";
import AddTodo from "./MyComponents/AddTodo";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todoToDelete) => {
    console.log("I am onDelete", todoToDelete);
    const newTodos = todo.filter((e) => e !== todoToDelete);
    setTodo(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos)); // ✅ Save updated list
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);

    let sno;
    if (todo.length === 0) {
      sno = 1;
    } else {
      sno = todo[todo.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodo([...todo, myTodo]);
    console.log(myTodo);
  };

  const [todo, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo)); // ✅ Save on change
  }, [todo]);

  return (
    <>
      <BrowserRouter>
  <Header title="My Todos List" searchBar={false} />
  <Routes>
    <Route
      path="/"
      element={
        <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todo} onDelete={onDelete} />
        </>
      }
    />
    <Route path="/about" element={<About />} />
  </Routes>
  <Footer />
</BrowserRouter>

    </>
  );
}

export default App;
