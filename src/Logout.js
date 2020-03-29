import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Logout extends Component {
  constructor() {
    super();
    this.state = {};
    this.logout = this.logout.bind(this);
  }
  logout = () => {
    localStorage.clear();
    return <Redirect to="/" push />;
  };
  clicka = () => {
    document.getElementById("nav-profile-tab").click();
  };
  componentDidMount() {
    this.clicka();
  }

  render() {
    return (
      <a
        id="nav-profile-tab"
        onClick={this.logout}
        href="/"
        className="btn btn-default btn-flat"
      ></a>
    );
  }
}
export default Logout;
