import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="body-left">
          <Sidebar />
        </div>
        <div className="body-right">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
