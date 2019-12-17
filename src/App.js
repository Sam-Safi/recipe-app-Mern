import React from "react";
import "./App.css";
import { Recipes } from "./components/Recipes";
import { Route, Switch } from "react-router-dom";
import { NavMenu } from "./components/Nav";
import { RecipeForm } from "./components/RecipeForm";
import { EditRecipeForm } from "./components/EditRecipeForm";
// import { DeleteRecipeForm } from "./components/DeleteRecipeForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <NavMenu />
      <Switch>
        <Route exact path="/" component={Recipes} />
        <Route exact path="/create" component={RecipeForm} />
        <Route exact path="/edit/:id" component={EditRecipeForm} />
        <Route exact path="/delete/:id" component={Recipes} />
      </Switch>
    </div>
  );
}

export default App;
