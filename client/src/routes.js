// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import Contact Us from "./pages/Contact Us";
import MerchantEdit from "./pages/MerchantEdit";
import MerchantList from "./pages/MerchantList";
import OrderReceived from "./pages/OrderReceived";
import ProductsEdit from "./pages/ProductsEdit";
import ProductsList from "./pages/ProductsList";
import Staff Login from "./pages/Staff Login";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="ContactUs" component={ Contact Us }  />
              <PrivateRoute exact path="/merchants/:id" component={ MerchantEdit }  />
              <PrivateRoute exact path="/merchants" component={ MerchantList }  />
              <PrivateRoute exact path="receiveorder" component={ OrderReceived }  />
              <PrivateRoute exact path="/productses/:id" component={ ProductsEdit }  />
              <PrivateRoute exact path="/productses" component={ ProductsList }  />
              <PrivateRoute exact path="staffLogin" component={ Staff Login }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;