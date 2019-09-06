import React from "react";
import SplashPage from "./SplashPage";
import View from "./View";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route exact path="/view" component={View} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
