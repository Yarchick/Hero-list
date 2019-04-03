import React from "react";

import Avatar from "./Avatar";

const UserCard = (props) => {
  let userCardRef;

  const selectCard = () => {
    props.selectCard(props.user, userCardRef);
  };

  return (
    <div ref={(el) => (userCardRef = el)} className="user-card" onClick={selectCard}>
      <Avatar src={props.user.image} />
      <div className="name">{props.user.name}</div>
      <div className="bio">{props.user.bio}</div>
    </div>
  );
};

export default UserCard;
