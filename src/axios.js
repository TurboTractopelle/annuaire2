import axios from "axios"

const instance = axios.create({
    baseURL: "https://annuaire2-228f7.firebaseio.com" 
})


export default instance