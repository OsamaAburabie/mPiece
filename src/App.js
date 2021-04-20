import { ThemeProvider } from "./contexts/themeContext";
import Routes from "./Routes";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider>
        <SimpleBarReact style={{ height: "100vh" }}>
          <Routes />
        </SimpleBarReact>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
