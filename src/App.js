import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 import jwtDecode from 'jwt-decode';
import authService from './Service/authService'
import SignIn from './Component/SignIn/SignIn';  
import SignUp from './Component/SignUp/SignUp'; 
import ForgotPassword from './Component/PasswordReset/ForgotPassword';
import ResetPassword from './Component/PasswordReset/ResetPassword';
import Dashboard from './Component/Dashboard/Dashboard'
import PermanentDrawerLeft from './Component/sidebar/sidebar';
import ResponsiveDrawer from './Component/sidebar/siebardup';
import Profile from './Component/Profile/Profile';


//Admin Routes
import ViewUsers from './Component/Admin/ViewUsers';
import ViewUserBuses from './Component/Admin/ViewUserBuses'; 

// Notify messages
// import Success from './Component/Notification/Success';
// import Error from './Component/Notification/Error';
import ConfirmDialog from './Component/Notification/ConfirmDialog';

// Importing Routes for Conductor details
import AddConductor from './Component/Conductor/AddConductors/AddConductor';
import ViewConductor from './Component/Conductor/ViewConductors/ViewConductors';
import ViewConductorDup from './Component/Conductor/ViewConductors/ViewConductorsDup';
import ViewSingleConductor from './Component/Conductor/ViewConductors/ViewSingleConductor'
import UpdateConductors from './Component/Conductor/ViewConductors/UpdateConductors';
import ConductorForm from './Component/Conductor/ConductorForm'

// Importing Routes for Bus details
import BusRegister from './Component/Bus/BusRegister'
import ViewBuses from './Component/Bus/ViewBuses'
import BusProfile from './Component/Bus/BusProfile'
import UpdateBusForm from './Component/Bus/UpdateBus'

// routes for testing 
import Table from './Component/Layouts/Table'
import FormDialog from './Component/Layouts/DialogForm'
import CheckingView from './Component/Layouts/CheckingView'
import ExampleForm from './Component/Layouts/ExampleForm'
import DynamicInput from './Component/Layouts/DynamicInput'
import BusRegisterFunc from './Component/Bus/BusRegisterFunc'

//import ViewSingleConductor from './Component/sidebar/siebardup'
import test from './Component/SignUp/test';

//Report Generation

import DatePic from './Component/ReportGeneration/DatePeriod';
import CreateReport from './Component/ReportGeneration/CreateReport';
import Logout from './Component/Dashboard/Logout';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Component/ProtectedRoutes';


//Passenger Routes
import Passenger from './Component/Passengers/Passengers'
  
class App extends Component {
    state={};
    componentDidMount() {
        // const user = authService.getCurrentUser();
        // this.setState({user});
        // console.log(user);

        try {
            const jwt=localStorage.getItem("token");
            const user=jwtDecode(jwt);
            // console.log(user);
            this.setState({user})
        } catch (error) {}
    }
     
    render() {  
        // <ToastContainer/>
        const {user}=this.state;
          return (  
              <Router>
                  <ToastContainer
                  position="top-left"
                  autoClose={3000}
                  style={{ width: "800px" }}
                  />
                  <Switch>
                      {user &&  <Route exact path="/" component={Dashboard}/>}
                      {!user && <Route exact path="/" component={SignIn}/> }
                      <Route exact path ="/signup" component ={SignUp}/>
                      <Route exact path="/dashboard" component={Dashboard}/>
                      <Route exact path="/forgotpassword" component={ForgotPassword}/>
                      <Route exact path="/resetpassword" component={ResetPassword}/>
                      <Route exact path="/sidebar" component={PermanentDrawerLeft}/>
                      <Route exact path="/sidebardup" component={ResponsiveDrawer}/>
                      <Route exact path="/logout" component={Logout}/>
                      <Route exact path="/profile" component={Profile}/>

                          {/* Routes for Admin */}
                      <Route exact path="/viewUsers" component={ViewUsers}/>
                      <Route exact path="/viewUserBuses" component={ViewUserBuses}/>

                          {/* Routes for Conductor */}
                      <Route exact path="/addconductor" component={AddConductor}/>
                      <Route exact path="/viewconductor" component={ViewConductor}/>
                      <Route exact path="/addconductor" component={AddConductor}/>
                      <Route exact path="/viewconductordup" component={ViewConductorDup}/>
                      <Route exact path="/viewsingleconductor" component={ViewSingleConductor}/>
                      <Route exact path="/UpdateConductors/:id" component={UpdateConductors}/>
                      <Route exact path="/ConductorForm" component={ConductorForm}/>


                          {/* Routes for buses */}
                      <Route exact path="/busRegister" component={BusRegister}/>
                      <Route exact path="/viewBuses" component={ViewBuses}/> 
                      <Route exact path="/busProfile/:id" component={BusProfile}/>
                      <Route exact path="/updateForm/:id" component={UpdateBusForm}/>

                         {/* Routes for Sample UI */}
                      <Route exact path="/table" component ={Table}/> 
                      <Route exact path="/formDialog" component={FormDialog}/>
                      <Route exact path="/checkView" component={CheckingView}/>        
                      <Route exact path="/exampleform" component={ExampleForm}/>
                      <Route exact path="/dynamicInput" component={DynamicInput}/>
                      <Route exact path="/busRegistrationFunc" component={BusRegisterFunc}/>

                      <Route exact path="/viewsingleconductor" component={ViewSingleConductor}/>
                      <Route exact path="/test" component={test}/>

                      {/* Report Generation */}
                      <Route exact path = "/reportgeneration"  component ={DatePic}/>
                      <Route exact path = "/createreport" component = {CreateReport}/>

                      {/* Routes for Passenger */}
                      <Route exact path = "/passengers"  component ={Passenger}/>
                  </Switch>
              </Router>
          
           )  
       }  
}  
  
export default App;