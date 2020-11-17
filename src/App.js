import "./App.css";
import Home from "./component/Home";
import axios from "axios";
import React, {
  createContext,
  useReducer,
  useState,
  useHistory,
  useContext,
  useEffect,
} from "react";

import Profile from "./component/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { reducer, intialState } from "./reducer/reducer";

export const UserContext = createContext();

function Routing() {
  const { state, dispatch } = useContext(UserContext);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Profile/:username" component={Profile} />
    </Switch>
  );
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
