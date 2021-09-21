import "./App.css";
import React, { useState } from "react";
import Home from "../../Pages/Home";
import MyPage from "../../Pages/MyPage";
import Navbar from "../Navbar/Navbar";
import BestsellerPage from "../../Pages/BestsellerPage";
import LogInPage from "../../Pages/LogInPage";
import SignUpPage from "../../Pages/SignUpPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [userList, setUserList] = useState([
    {
      email: "harrypotter@gmail.com",
      password: "magic123",
    },
    {
      email: "hermionegranger@gmail.com",
      password: "magic456",
    },
    {
      email: "ronweasley@gmail.com",
      password: "magic789",
    },
  ]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home userList={userList} />
          </Route>
          <Route path="/profile">
            <MyPage userList={userList} />
          </Route>
          <Route path="/bestseller">
            <BestsellerPage userList={userList} />
          </Route>
          <Route path="/login">
            <LogInPage userList={userList} />
          </Route>
          <Route path="/signup">
            <SignUpPage userList={userList} setUserList={setUserList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
// add user login state here, use function to pass down user to all pages
// if user submits form, see if password is correct by verifying against existing array
// if they exist, login, if they dont exist, in signup page, add new user id and password in array
// beecript/hashing
export default App;
