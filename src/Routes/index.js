import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Overview from "../Pages/Overview";
import { Contact } from "../Pages/Contact";
import { Favorites } from "../Pages/Favorites";
import { Header, Nav, Wrapper, Brand } from "../Components";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header>
        <Wrapper space="2" flex alignItems="center" justifyContent="space-between">
          <Brand size={3} />
          <Nav />
        </Wrapper>
      </Header>

      <Switch>
        <Route path="/" exact>
          <Overview />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
