import React, { Component } from "react";
import Header from "../../components/Header/Header";
import CardList from "../CardList/CardList";
import Library from "../Library/Library";
import { Route, Switch } from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={CardList} />
          <Route exact path="/library" component={Library} />
        </Switch>
      </div>
    );
  }
}

export default App;
