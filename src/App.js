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
import Post from "./component/Post";
import Gallery from "./component/Gallery";
import ToDo from "./component/ToDo";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { reducer, intialState } from "./reducer/reducer";

export const UserContext = createContext();

function Routing() {
  const { state, dispatch } = useContext(UserContext);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Profile/:username" component={Profile} />
      <Route path="/Post/:username" component={Post} />
      <Route path="/Gallery/:username" component={Gallery} />
      <Route path="/ToDo/:username" component={ToDo} />
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
