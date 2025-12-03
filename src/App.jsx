import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Section/Header";
import Footer from "./Components/Section/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
