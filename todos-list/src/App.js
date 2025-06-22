// import logo from './logo.svg';
import './App.css';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import React, { useState } from 'react';

function App() {
  const onDelete = (todoToDelete)=> {
    console.log("I am onDelete", todoToDelete);
    setTodo(todo.filter((e) =>  e !== todoToDelete
    ));
  }
  const [todo, setTodo] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to go to the market to buy vegetables"
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "You need to go to the mall to buy new cloths"
    },
    {
      sno: 3,
      title: "Go to the Bank",
      desc: "You need to go to the bank for the transaction"
    }
  ]);

  return (
    <>
    <Header title="My Todos List" searchBar={false} />
    <Todos todos={todo} onDelete={onDelete}/>
    <Footer />
    </>
  );
}

export default App;
