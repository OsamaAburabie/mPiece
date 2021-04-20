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
import SingleAd from "./pages/SingleAd";
import NotFound from "./pages/NotFound";
import CircularProgress from "@material-ui/core/CircularProgress";
import Popup from "./components/Tasker/PendingPopup";

function Routes() {
  const { isLoggedIn, role, pendingCon } = useContext(AuthContext);
  if (isLoggedIn === undefined) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
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
          <Route path="/services/:catId" exact component={TaskerAds} />
          <Route path="/services/:adId/:taskerId" component={SingleAd} />
          <Route path="/NotFound404" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>

      {isLoggedIn && role === "tasker" && pendingCon.length > 0 && <Popup />}
    </div>
  );
}

export default Routes;
