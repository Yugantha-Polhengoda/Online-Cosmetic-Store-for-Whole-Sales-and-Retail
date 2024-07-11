import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homelayout from "./components/Layout/Homelayout";
import HomeScreen from "./screens/HomeScreen";
import Products from "./screens/Products";

//import { useEffect } from "react";

function App() {
  return (
    <Router>
      <Homelayout>
        <main className="my-3">
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/Products" Component={Products} exact />
          </Routes>
        </main>
      </Homelayout>
    </Router>
  );
}

export default App;
