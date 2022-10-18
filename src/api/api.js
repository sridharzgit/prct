import axios from "axios"
const config = { headers:{"Access-Control-Allow-Origin":'*'}}

const api = axios.create({baseURL:"http://localhost:9090/",config})
export default api
