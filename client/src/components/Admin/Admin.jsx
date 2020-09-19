import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Navbar";
import ProductsAdmin from "./ProductsAdmin";
import "./Admin.css";
import UpdateProduct from "./UpdateProducts";

const Admin = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/owner" exact render={() => <ProductsAdmin />} />
        <Route path="/owner/:id" exact render={() => <UpdateProduct />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Admin;
