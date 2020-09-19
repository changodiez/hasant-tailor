import React, { Fragment } from "react";
import {
  BrowserRouter,
  
  Route,
  Switch
} from "react-router-dom";
import "./App.css";

import User from "./components/User";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <User/>
  );
}

export default App;
