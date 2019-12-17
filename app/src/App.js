import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components";
import { Home, Restaurante, RestauranteCadastrar, RestauranteEditar } from "./pages";

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
            <Route exact path="/restaurantes">
              <Restaurante/>
            </Route>
            <Route exact path="/restaurantes/cadastrar">
              <RestauranteCadastrar/>
            </Route>
            <Route exact path="/restaurantes/:id">
              <RestauranteEditar/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
