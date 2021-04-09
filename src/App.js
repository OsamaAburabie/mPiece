import { ThemeProvider } from "./contexts/themeContext";
import Routes from "./Routes";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
function App() {
  return (
    <ThemeProvider>
      <SimpleBarReact style={{ height: "100vh" }}>
        <Routes />
      </SimpleBarReact>
    </ThemeProvider>
  );
}

export default App;
