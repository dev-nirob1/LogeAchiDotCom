import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Section/Header";
import Footer from "./Components/Section/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
