import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Section/Footer";
import Navbar from "./Components/Section/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
