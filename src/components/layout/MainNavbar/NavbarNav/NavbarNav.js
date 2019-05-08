import React from "react";
import { Nav } from "shards-react";

import UserActions from "./UserActions";

export default ({ login }) => (
  <Nav navbar className="flex-row">
    <UserActions login={login}/>
  </Nav>
);
