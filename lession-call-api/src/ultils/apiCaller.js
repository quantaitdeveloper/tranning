import axios from "axios";
import * as Config from "../constants/Config";


const callAPI = (endpoint , method="GET" , body) =>{
    return axios({
        method:method,
        data :body,
        url: `${Config.API_URL}/${endpoint}`
    }).catch(error=>{
        console.log(error)
    })
}
export default callAPI;
// export default function callAPI(endpoint, method="GET", body){
//     return axios({
//         method:method,
//         url : `${Config.API_URL}/${endpoint}`,
//         data:body
//     }).catch(error =>{
//         console.log(error)
//     })
// }