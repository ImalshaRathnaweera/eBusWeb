import React, { Component } from 'react'
import authService from '../../Service/authService';

export default class Logout extends Component {
    componentDidMount() {
        
        authService.logout();
        window.location = '/';
    }

    render() {
        return (
            null
        )
    }
}
