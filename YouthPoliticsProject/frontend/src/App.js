import React, { useEffect,useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import RouteMain from "./RouteMain";
import { Menu,Main } from "./components";
import axios from 'axios';
import './App.css';

function App() {

  //0.1
  
  useEffect(() => {
  async function fetchdata() {
    try{
    const res  = await axios.get(
      '?pageIndex=1&display=1&openApiVlak=c4ef1792d2b792033d1e4126',
      );
      console.log("json:",res);
    
  }catch (e) {
  console.log("e:",e)
}
}
  fetchdata();
}, []);


//0.2 

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await axios.get(
//         `?pageIndex=1&display=1&openApiVlak=c4ef1792d2b792033d1e4126`
//       )
//       console.log("json:",res.data.response.body.items.item)
//     } catch (e) {
//       console.log("e:",e)
//     }
//   }
//   fetchData()
// }, [])

  return (
    <BrowserRouter>
      <Menu/>
      <Main/>
      <RouteMain/>
    </BrowserRouter>
  );
}

export default App;
