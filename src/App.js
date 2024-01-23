import "./App.css";
import { NavLink, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Stopwatch from "./Components/Stopwatch";
import Timer from "./Components/Timer";
import NotFound from "./Components/NotFound";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Timer</NavLink>
          </li>
          <li>
            <NavLink to="/Stopwatch">Stopwatch</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          {/* Default Route  */}
          <Route index element={<Timer />} />
          <Route path="/Stopwatch" element={<Stopwatch />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
