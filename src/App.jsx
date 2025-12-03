import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Outlet />
      <h1 className="text-3xl text-red-400 font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
