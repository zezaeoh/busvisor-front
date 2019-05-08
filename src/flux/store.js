import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems()
};

let _login = {
  login: false
}

class Store extends EventEmitter {
  constructor() {
    super();
    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions = ({ actionType, payload }) => {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      case Constants.LOGIN:
        this.loginControl();
        break;
      default:
    }
  }

  toggleSidebar = () => {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE_TOGGLE);
  }

  loginControl = () => {  
    _login.login = !_login.login;
    this.emit(Constants.CHANGE_LOGIN_STATUS);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getLoginState() {
    return _login.login;
  }

  getSidebarItems() {
    return _store.navItems;
  }

  addListener(method, callback) {
    this.on(method, callback);
  }
}

export default new Store();
