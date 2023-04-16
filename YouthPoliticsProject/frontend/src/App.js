import React, { useEffect,useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import RouteMain from "./RouteMain";
import { Menu,Main } from "./components";
import axios from 'axios';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <Main/>
      <RouteMain/>
    </BrowserRouter>
  );
}

export default App;
