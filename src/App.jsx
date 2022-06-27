import React from "react";
import Pages from "./components/pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import Category from "./components/Category";
import Search from "./components/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
