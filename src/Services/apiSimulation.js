import axios from "axios";

const apiSimulation = axios.create({
    baseURL:'https://merxbackend.herokuapp.com/'
    //baseURL:'http://localhost:3333/'
    
});


export default apiSimulation;