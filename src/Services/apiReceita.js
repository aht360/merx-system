import axios from "axios";

const apiReceita = axios.create({
    baseURL:'https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/cnpj/'
    
});


export default apiReceita;