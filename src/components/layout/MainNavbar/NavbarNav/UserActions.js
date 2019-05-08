import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

import { Dispatcher, Constants } from "../../../../flux";

export default class UserActions extends React.Component {
  state = {
    visible: false,
    login: this.props.login ? this.props.login: false
  };

  toggleUserActions = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleClick = () => {
    Dispatcher.dispatch({
      actionType: Constants.LOGIN
    });
    window.location = '/';
  }

  render() {
    const dditems = (this.state.login) ?
      (<Collapse tag={DropdownMenu} right small open={this.state.visible}>
        <DropdownItem tag={Link} to="user-info">
          <i className="material-icons">&#xE7FD;</i> Profile
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="text-danger" onClick={this.handleClick}>
          <i className="material-icons text-danger">&#xE879;</i> Logout
        </DropdownItem>
      </Collapse>):
      (<Collapse tag={DropdownMenu} right small open={this.state.visible}>
        <DropdownItem tag={Link} to="/join">
          <i className="material-icons">people</i> Join
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to="/login" className="text-success">
          <i className="material-icons text-success">how_to_reg</i> Login
        </DropdownItem>
      </Collapse>);

    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/user.png")} 
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{(this.state.login)? 'member':'non-member'}</span>
        </DropdownToggle>
        {dditems}
      </NavItem>
    );
  }
}
