import { BASE_URL_API } from "../config";
import { errHandler } from "../commonFunction";
const axios = require('axios');

export const carInfoApi = (callback:any)=>{
    const url =BASE_URL_API + "/car"
    axios.get(url)
    .then((response:any) => {
        callback(response.data);
    })
    .catch((err:any)=>{
        errHandler(err);
    })
}

export const carDeleteApi = async(deleteid:number,callback:any)=>{
    const url =BASE_URL_API + `/car/${deleteid}`
    axios({
        method: 'Delete',
        url: url
    })
    .then((response:any)=>{
        callback(response.data)
    })
    .catch((err:any)=>{
         errHandler(err);
    })
}

export const carDetailApi = (carid:number,callback:any)=>{
    const url =BASE_URL_API + `/car/${carid}`
    axios.get(url)
    .then((response:any) => {
        callback(response.data);
    })
    .catch((err:any)=>{
        errHandler(err);
    })

}

export const carAddApi = (data:any,callback:any)=>{
    const url =BASE_URL_API + "/car"
    axios({
        method: 'post',
        url: url,
        data:data 
      })
      .then((response:any)=>{
            callback(response.data)
      })
      .catch((err:any)=>{
        errHandler(err);
    })
}
