import { BrowserRouter } from "react-router-dom";
import RouteMain from "./RouteMain";
import { Menu,Main } from "./components";
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
