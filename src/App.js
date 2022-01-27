import "./App.css";
import "uswds/dist/css/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { GovBanner } from "@trussworks/react-uswds";

function App() {
  return (
    <div className="App">
      <GovBanner />
      <header className="App-header">
        <p>Hello CAM-API-Portal</p>
      </header>
    </div>
  );
}

export default App;
