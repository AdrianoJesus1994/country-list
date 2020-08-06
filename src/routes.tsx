import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Load, Header } from "./components";

import GlobalStyles from "./styles/global";

const CountryList = lazy(() => import("./pages/CountryList"));
const Details = lazy(() => import("./pages/Details"));

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<Load />}>
        <Switch>
          <Route path="/" component={CountryList} exact />
          <Route path="/details/:idcountry" component={Details} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
