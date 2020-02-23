import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Resultados from "./scenes/Resultados";

import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/res" component={Resultados} />
        <Route render={() => <p>Não encontrado</p>} />
      </Switch>
    </div>
  );
}

export default App;
