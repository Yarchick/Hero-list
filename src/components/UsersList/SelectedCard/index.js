import React, { PureComponent } from "react";

import Avatar from "../UserCard/Avatar";

class SelectedCard extends PureComponent {
  state = {
    showDesc: false,
    user: this.props.data.user,
    elementData: this.props.data.elementData,
  };

  componentDidMount() {
    this.animateCard();
  }

  animateCard = () => {
    const { elementData } = this.state;

    setTimeout(() => {
      this.setState({
        elementData: {
          ...elementData,
          top: 40,
        },
        showDesc: true,
      });
    }, 200);
  };

  render() {
    const { showDesc, user, elementData } = this.state;
    const { onList } = this.props;

    const userCard = onList ? "user-card user-card-back" : "user-card";
    const content = onList ? "content content-back" : "content";

    return (
      <div
        className="selected-card"
        style={{
          top: elementData.top - 70,
        }}>
        <div className={userCard}>
          <Avatar src={user.image} />
          {!onList && <div className="background-cirlce" />}
        </div>

        {showDesc && (
          <div className={content}>
            <div className="name">{user.name}</div>

            <div className="bio">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industrys standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SelectedCard;
