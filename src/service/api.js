//armazenando no service todas os arquivos que fazem requisições com serviços externos
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/jwt-rest-api"
});

export default api;