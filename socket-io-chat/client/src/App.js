import React from "react";
import Zft from "./Zft";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:id" component={Zft} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
