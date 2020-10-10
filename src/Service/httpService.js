import axios from 'axios';
import authService from './authService'

//axios.default.headers.common['x-auth-token'] =authService.getJwt();

axios.interceptors.response.use(null,error=>{
    const expectedError =
    error.response && error.response.status>=400 && 
    error.response.status<500;

    if (!expectedError) {
        console.log("Loggin the error",error);
        alert("An unexpected error occurred.");
    }

    return Promise.reject(error);
});

// function setJwt(jwt){
//      axios.default.headers.common['x-auth-token'] =jwt

// }

export default {
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete,
    // setJwt
};