import React, { Component } from "react";
import Header from "../../components/Header/Header";
import CardList from "../CardList/CardList";
import Library from "../Library/Library";
import { Route, Switch } from "react-router";
import DetailsPage from "../DetailsPage/DetailsPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={CardList} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/:id" component={DetailsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
