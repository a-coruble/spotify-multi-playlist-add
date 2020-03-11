import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

import React from "react";
import { Button, Classes } from "@blueprintjs/core";

function App() {
  document.body.className = Classes.DARK; // Used to set Dark / light theme on all components at once
  return (
    <div className="App">
      <Button text="test" />
    </div>
  );
}

export default App;
