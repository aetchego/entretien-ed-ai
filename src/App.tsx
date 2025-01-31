import "./App.css";
import { Outlet } from "react-router-dom";
import HorizontalNav from "./components/Nav";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HorizontalNav />
      <main className="flex-grow">{<Outlet />}</main>
    </div>
  );
}

export default App;
