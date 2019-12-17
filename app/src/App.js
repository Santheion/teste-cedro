import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components";
import { Home, Restaurante } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/restaurantes">
              <Restaurante/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
