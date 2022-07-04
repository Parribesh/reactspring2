import "./App.css";
import { Sidebar } from "./routes/main-container/sidebar/Sidebar";
import { Main } from "./routes/main-container/main/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-sidebar">
        <Sidebar />
      </div>
      <div className="App-main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
