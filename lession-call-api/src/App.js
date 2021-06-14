import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/menu/menu"
import ProductList from "./components/productlist/ProductList";
import { routes } from "./routes";
class App extends Component {
  // showRoutes=(routes)=>{
  //   let result ="";
  //   if(routes.length > 0){
  //     result = routes.map((route,index)=>{
  //         return <Route key={index} path={route.map} render={()=>{
  //           return <route.component />
  //         }} exact={route.exact}>
  //         </Route>
  //     })
  //   }
  //   return result;
  // }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu></Menu>
          <Switch>
              {routes.map((route,index)=>{
                  return <Route path={route.path} component={route.component} exact={route.exact}></Route>
              })}
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
