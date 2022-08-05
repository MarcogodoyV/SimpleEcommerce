import ReactDOM from "react-dom";
import React from "react";
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"

ReactDOM.render(
  <ContextProvider>
      <Router>
          <App />
      </Router>
  </ContextProvider>, 
  document.getElementById("root")
)
  