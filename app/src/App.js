import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components";
import { 
  Home, 
  Restaurante, 
  RestauranteCadastrar, 
  RestauranteEditar,
  Prato,
  PratoCadastrar,
  PratoEditar
} from "./pages";

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

            <Route exact path="/pratos">
              <Prato/>
            </Route>
            <Route exact path="/pratos/cadastrar">
              <PratoCadastrar/>
            </Route>
            <Route exact path="/pratos/:id">
              <PratoEditar/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
