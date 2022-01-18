import { ADD_FILETER,CREATE_FILETER ,EDIT_FILETER, DELETE_FILETER, LIKE_FILETER } from "./filterType"
import axios from "axios";
// import returnError from "./../error/errorAction"


export const addBlog =(data)=>{
    return {
        type:ADD_FILETER,
        payload:data
    }
}


export const addFilter = () => (dispatch) => {
    axios({
        method: "get",
        url:"http://127.0.0.1:8000/api/v1/ad",
    })
        .then((res) =>
            dispatch({
                type: ADD_FILETER,
                payload: res.data,
            })
        )
        .catch((err) => {
            console.log(err);
        });
};
export const resetDB = (data) => (dispatch) => {
    axios({
        method: "delete",
        url:"http://127.0.0.1:8000/api/v1/reset",
    })
        .then((res) =>{
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        });
};