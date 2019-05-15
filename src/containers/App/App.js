import React, { Component } from "react";
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardList />
      </div>
    );
  }
}

export default App;
