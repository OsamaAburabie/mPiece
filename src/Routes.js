import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContext from "../src/contexts/AuthContext";
import Connections from "./pages/Connections";
import Services from "./pages/Services";
import TaskerAds from "./pages/TaskerAds";

function Routes() {
  // const { isLoggedIn } = useContext(AuthContext);
  // if (isLoggedIn === undefined) {
  //   return (
  //     <div className="Loading__container">
  //       <h1>Loading</h1>
  //     </div>
  //   );
  // }
  return (
    <div className="bg-primary ">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/myConnections" component={Connections} />
          <Route path="/services" exact component={Services} />
          <Route path="/services/:id" component={TaskerAds} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Routes;
