import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./login/login";
import Registration from "./registration/registration";

function auth() {
  return (
    <BrowserRouter>
      <div className="">
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/registration" component={Registration} />
      </div>
    </BrowserRouter>
  );
}

export default auth;
