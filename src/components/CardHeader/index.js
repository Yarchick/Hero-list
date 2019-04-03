import React, { Component } from "react";

class CardHeader extends Component {
  state = {
    headerClass: "card-header",
  };

  componentDidMount() {
    window.addEventListener("keydown", this.eventHandler, false);
  }

  eventHandler = (e) => {
    if (e.key === "Escape") {
      this.backToList();
    }
  };

  backToList = () => {
    this.setState({
      headerClass: "card-header card-header-out",
    });
    this.props.backToList();
  };

  render() {
    const { headerClass } = this.state;

    return (
      <div className={headerClass}>
        <div className="back" onClick={this.backToList}>
          <i className="fas fa-chevron-left" />
          back
        </div>

        {/* <div className="switch-block">
          <span>Bio</span>
          <span>Details</span>
        </div> */}

        <div className="add">
          <i className="fas fa-plus" />
        </div>
      </div>
    );
  }
}

export default CardHeader;
