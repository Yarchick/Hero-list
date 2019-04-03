import React, { Component } from "react";

import UsersList from "./components/UsersList";

class App extends Component {
  render() {
    return (
      <div className="user-list-wrapper">
        <div className="header">
          <p>Following</p>
        </div>

        <UsersList />
      </div>
    );
  }
}

export default App;
