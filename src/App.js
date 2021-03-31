import logo from './logo.svg';
import myImage from './img/me.jpg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NoMatch from "./pages/NoMatch";

class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Haanji Kiven sab badiya?</h1>
//       <img src={myImage} alt="profile-image"></img>
//     </div>
//   );
// }

export default App;
