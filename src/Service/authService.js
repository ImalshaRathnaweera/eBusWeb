import {apiUrl} from '../config.json'
import http from "./httpService";
import jwtDecode from 'jwt-decode';

const loginEndpoint = apiUrl+"/auth/owner/login";
const tokenKey = "token";

// http.setJwt(getJwt());

export const login=(email,password) =>{
    http.post(loginEndpoint,{email,password}).then(res =>{
        const jwt = res.headers["x-auth-token"]
        localStorage.setItem(tokenKey, jwt);
    });
}
export const loginWithJwt=(jwt)=>{
    localStorage.setItem(tokenKey, jwt);
}

export const logout=()=>{
    localStorage.removeItem(tokenKey);
}

export const getCurrentUser=()=>{
    console.log('moda imalsha!')
    const jwt=localStorage.getItem(tokenKey);
        const user=jwtDecode(jwt);
        console.log(user);
        // this.setState({user})
        return user;
    // try {
    //     const jwt=localStorage.getItem(tokenKey);
    //     const user=jwtDecode(jwt);
    //     console.log(user);
    //     // this.setState({user})
    //     return user;
    // } catch (error) {
    //     return null;
    // }
       
}
export const getJwt=()=>{
    return localStorage.getItem(tokenKey)
}
export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
}