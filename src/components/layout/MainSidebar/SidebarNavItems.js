import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store, Constants } from "../../../flux";

class SidebarNavItems extends React.Component {
  state = {
    navItems: Store.getSidebarItems(),
    login: this.props.login ? this.props.login: false
  };

  componentWillMount() {
    Store.addListener(Constants.CHANGE_TOGGLE, this.onChange);
  }

  componentWillUnmount() {
    Store.removeListener(Constants.CHANGE_TOGGLE, this.onChange);
  }

  onChange = () => {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.filter(({login}) => (login == null) ? true: this.state.login === login)
                .map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
