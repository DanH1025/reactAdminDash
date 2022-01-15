import React from 'react'
import Topbar from "./components/topbar/topbar"
import Sidebar from "./components/sidebar/sidebar"
import Home from "../src/pages/home/home"
import Tables from "../src/pages/tables/tables"
import User from "../src/pages/user/user"


import "./app.css"
import {BrowserRouter, Switch ,Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/tables">
                <Tables/>
              </Route>
              <Route path="/user/:userId">
                <User/>
              </Route>
            </Switch>                    
        </div>        
    </BrowserRouter>
  );
}

export default App;
