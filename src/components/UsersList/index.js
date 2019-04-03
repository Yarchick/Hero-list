import React, { PureComponent } from "react";

import userList from "./user-list";

import CardHeader from "../../components/CardHeader";
import UserList from "./UserList";
import SelectedCard from "./SelectedCard";

class UsersList extends PureComponent {
  state = {
    selectedCard: {},
    onList: false,
  };

  backToList = () => {
    this.setState({
      onList: true,
    });
    setTimeout(() => {
      this.setState({
        onList: false,
        selectedCard: {},
      });
    }, 900);
  };

  selectCard = (data, ref) => {
    const elementData = ref && ref.getBoundingClientRect();

    this.setState({
      selectedCard: {
        user: data,
        elementData,
      },
    });
  };

  render() {
    const { selectedCard, onList } = this.state;

    return (
      <>
        {selectedCard.user && <CardHeader backToList={this.backToList} />}

        <div className="user-list">
          <UserList userList={userList} selectCard={this.selectCard} />

          {selectedCard.user && <SelectedCard data={selectedCard} onList={onList} />}
        </div>
      </>
    );
  }
}

export default UsersList;
