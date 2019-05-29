import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Errors from "./views/Errors";
import Intro from "./views/Intro";
import Join from "./views/Join";
import Login from "./views/Login";
import AddDevice from "./views/AddDevice";
import UserInformation from "./views/UserInformation";
import Statistics from "./views/Statistics";
import Overview from "./views/Overview";
import Check from "./views/Check";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/intro" />
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/intro",
    layout: DefaultLayout,
    component: Intro
  },
  {
    path: "/join",
    layout: DefaultLayout,
    component: Join
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/add-device",
    layout: DefaultLayout,
    component: AddDevice
  },
  {
    path: "/user-info",
    layout: DefaultLayout,
    component: UserInformation
  },
  {
    path: "/stat",
    layout: DefaultLayout,
    component: Statistics
  },
  {
    path: "/overview",
    layout: DefaultLayout,
    component: Overview
  },
  {
    path: "/check",
    layout: DefaultLayout,
    component: Check
  },

];
