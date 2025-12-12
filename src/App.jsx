import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Section/Header";
import Footer from "./Components/Section/Footer";
import Navbar from "./Components/Section/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      {/* <Header /> */}
      <Navbar/>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
