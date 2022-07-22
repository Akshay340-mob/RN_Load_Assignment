//@flow
import axios from 'axios';
import { baseURL } from '../config/Settings';


const instance = axios.create({
  baseURL: baseURL,
  timeout: 120000,
  headers: {
    Accept: 'application/json',
   
    
  },
});


// Add a request interceptor
instance.interceptors.request.use(async (config) => {
  console.log('Request --', config.Accept,config , config)
  
    config.headers['Content-Type'] = config.Content;
   
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


 // Add a response interceptor
  instance.interceptors.response.use(
  function (response) {
    // Do something with response data

    return response;
  }, function (error) {
  
    console.log("error", error)
    if (error === 'Network Error') {
      alert('red','Network Error')
    }
    // Do something with response error
    return Promise.reject(error);
  });


export default instance;
