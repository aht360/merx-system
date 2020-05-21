import axios from 'axios'
 
const api  = axios.create({
    baseURL:'https://merxbackend.herokuapp.com/',
})
export default api;