import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
      <Nav />
        <Route path="/" exact component={Books} />
        <Route exact path="/books" component={Books} />
    </div>
    </Router>
  );
}

export default App;
