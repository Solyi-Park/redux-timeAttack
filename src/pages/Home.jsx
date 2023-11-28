import React from "react";
import Header from "./componets/Header";
import Input from "./componets/Input";
import TodoList from "./componets/TodoList";
import Footer from "./componets/Footer";

const Home = () => {
  return<>
    <Header />
    <Input />
    <TodoList isWorking={true}/>
    <TodoList isWorking={false}/>
    <Footer />

  </>;
};

export default Home;
