import React from "react";
import { WithAdminAuth } from "../HOC";

function AuthenticationAdmin() {
  return <div>AuthenticationAdmin</div>;
}

export default WithAdminAuth(AuthenticationAdmin);
