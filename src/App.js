import Topbar from "./components/topbar"
import Sidebar from "./components/sidebar"
import Home from "../src/pages/home/home"
import "./app.css"

function App() {
  return (
    <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Home/>          
        </div>        
    </div>
  );
}

export default App;
