const axios = require("axios");
const MY_TOKEN = "7078040352:AAEQNwCghPyBTueWnHvgP3O0-vB-TQ-WvWs"

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;


function getAxiosInstance() {
    return {
        
        get(method, params) {
            console.log('------------------------')
            console.log(method)
            console.log(params)
            console.log(BASE_URL)
            console.log('------------------------')

            return  axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            })
        },
        post(method, data) {
            return axios({
                method: 'POST',
                baseURL: BASE_URL,
                url: `/${method}`,
                data,
            })
        }
    }
}


module.exports = {axiosInstance: getAxiosInstance()};