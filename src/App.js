import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";  
import './App.css';
import Quotes from "./components/quotes";
import SignIn from "./components/signIn";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<SignIn />}
            ></Route>
            <Route
              path="/quotes"
              element={<Quotes />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
