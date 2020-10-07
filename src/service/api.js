//armazenando no service todas os arquivos que fazem requisições com serviços externos
import axios from "axios";

const api = axios.create({
    baseURL: "https://cat-fact.herokuapp.com/"
});

export default api;