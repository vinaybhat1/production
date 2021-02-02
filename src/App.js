import "./App.css";
import React, { Component } from "react";
import Movies from "./compontents/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Rentals from "./compontents/rentals";
import Customers from "./compontents/customers";
import NotFound from "./compontents/notFound";
import NavBar from "./compontents/navBar";
import MovieForm from "./compontents/movieForm";
import LoginForm from "./compontents/loginForm";
import Register from "./compontents/register";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/register" component={Register}></Route>
            <Redirect from="/" exact to="movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
