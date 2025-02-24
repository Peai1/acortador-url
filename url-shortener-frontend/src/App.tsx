import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { getApps } from "./utils/helper";

function App() {

  const CurrentApp = getApps();

  return (
    <Router>
      {CurrentApp ? <CurrentApp /> : <div>Error: App not found</div>}
    </Router>
  );
}

export default App;
