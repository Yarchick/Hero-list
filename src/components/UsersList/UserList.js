import React, { PureComponent } from "react";

import UserCard from "./UserCard";

class UserList extends PureComponent {
  renderUserList = () => {
    return this.props.userList.map((user) => {
      return <UserCard key={user.name} user={user} selectCard={this.props.selectCard} />;
    });
  };

  render() {
    return <div className="user-list-inner">{this.renderUserList()}</div>;
  }
}

export default UserList;
