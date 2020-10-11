import React from 'react'
import {Route, Redirect } from 'react-router-dom';
import authService from "../Service/authService";

const ProtectedRoute =({path,component:Component,render, ...rest})=>{
    return (
        <Route
        {...rest}
        render = {props =>{
            if(!authService.getCurrentUser()) return<Redirect to = "/"/>;
            return Component? <Component {...props}/> : render(props);
        }}
        />

    );

};
export default ProtectedRoute;