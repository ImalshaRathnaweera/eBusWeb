import React, { Component } from 'react';
import SignIn from './Component/SignIn/SignIn';  
import SignUp from './Component/SignUp/SignUp'; 
import ForgotPassword from './Component/SignIn/ForgotPassword';
import PermanentDrawerLeft from './Component/sidebar/sidebar';
import AddConductor from './Component/Conductor/AddConductors/AddConductor';
import ViewConductor from './Component/Conductor/ViewConductors/ViewConductors';
import ViewConductorDup from './Component/Conductor/ViewConductors/ViewConductorsDup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ResetPassword from './Component/SignIn/ResetPassword';
import Profile from './Component/Profile/Profile';
import Success from './Component/Notification/Success';
import Error from './Component/Notification/Error';
import Table from './Component/Layouts/Table'
import FormDialog from './Component/Layouts/DialogForm'
import CheckingView from './Component/Layouts/CheckingView'

import PersistentDrawerLeft from './Component/Dashboard/Drawer'
import Dashboard from './Component/Dashboard/Dashboard'
import ExampleDash from './Component/Layouts/ExampleDash';
import ResponsiveDrawer from './Component/sidebar/siebardup';

import ViewSingleConductor from './Component/Conductor/ViewConductors/ViewSingleConductor'
import BusRegister from './Component/Bus/BusRegister'
import ViewBuses from './Component/Bus/ViewBuses'
import test from './Component/SignUp/test'; 




  
class App extends Component { 
    render() {  
          return (  
              <Router>
                  <Switch>
                      <Route exact path="/" component={SignIn}/>
                      <Route exact path ="/signup" component ={SignUp}/>
                      <Route exact path="/forgotpassword" component={ForgotPassword}/>
                      <Route exact path="/addconductor" component={AddConductor}/>
                      <Route exact path="/viewconductor" component={ViewConductor}/>
                      <Route exact path="/resetpassword" component={ResetPassword}/>
                      <Route exact path="/sidebar" component={PermanentDrawerLeft}/>
                      <Route exact path="/profile" component={Profile}/>
                      <Route exact path="/addconductor" component={AddConductor}/>
                      <Route exact path="/viewconductordup" component={ViewConductorDup}/>
                      <Route exact path="/sidebardup" component={ResponsiveDrawer}/>
                      <Route exact path="/table" component ={Table}/>
                      <Route exact path="/formDialog" component={FormDialog}/>
                      <Route exact path="/checkView" component={CheckingView}/>
                      <Route exact path="/drawer" component={PersistentDrawerLeft}/>
                      <Route exact path="/dashboard" component={Dashboard}/>
                      <Route exact path="/busRegister" component={BusRegister}/>
                      <Route exact path="/viewBuses" component={ViewBuses}/>
                      <Route exact path="/exampDash" component={ExampleDash}/> 
                      <Route exact path="/viewsingleconductor" component={ViewSingleConductor}/>
                      <Route exact path="/test" component={test}/>
                  </Switch>
              </Router>
          
           )  
       }  
}  
  
export default App;