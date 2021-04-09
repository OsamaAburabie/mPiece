import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";

function Routes() {
  return (
    <body className="bg-primary ">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </body>
  );
}

export default Routes;
