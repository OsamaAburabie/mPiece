import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import Sidebar from "../Sidebar";
import { useHistory } from "react-router";

function Dashboard() {
  const { myToken, isLoggedIn, role } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (role !== "admin" || isLoggedIn === false) {
      history.push("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-screen">
      <Sidebar />
    </div>
  );
}

export default Dashboard;
