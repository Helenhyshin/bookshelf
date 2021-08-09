import "./App.css";
import Home from "../../Pages/Home";
import MyPage from "../../Pages/MyPage";
import Navbar from "../Navbar/Navbar";
import BestsellerPage from "../../Pages/BestsellerPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <MyPage />
          </Route>
          <Route path="/bestseller">
            <BestsellerPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
