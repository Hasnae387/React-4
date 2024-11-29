import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MenuList from "./components/MenuList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Menu" element={<MenuList />} />    

      </Routes>
    </>
  );
}

export default App;
