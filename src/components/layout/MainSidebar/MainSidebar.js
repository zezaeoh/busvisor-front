import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarNavItems from "./SidebarNavItems";

import { Store, Constants } from "../../../flux";

class MainSidebar extends React.Component {
  state = {
    menuVisible: false,
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
      menuVisible: Store.getMenuState(),
    });
  }

  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      this.state.menuVisible && "open"
    );

    return (
      <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}
      >
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarNavItems login={this.props.login}/>
      </Col>
    );
  }
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

MainSidebar.defaultProps = {
  hideLogoText: false
};

export default MainSidebar;
