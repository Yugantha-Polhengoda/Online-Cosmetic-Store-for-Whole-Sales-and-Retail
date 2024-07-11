import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Campaign from "./pages/Campaign";
import Addstock from "./pages/Addstock";
import Discount from "./pages/discount";
import Monthlyreport from "./pages/Monthlyreport";

function App() {
  return (
    <div className="App">
      <layout>
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/Dashboard" element={<Dashboard />} />

              <Route path="/Campaign" element={<Campaign />} />

              <Route path="/Addstock" element={<Addstock />} />

              <Route path="/Discount" element={<Discount />} />

              <Route path="/Monthlyreport" element={<Monthlyreport />} />
            </Routes>
          </div>
        </BrowserRouter>
      </layout>
    </div>
  );
}

export default App;
