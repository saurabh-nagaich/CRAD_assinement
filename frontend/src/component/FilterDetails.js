import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function FilterDetails({match}) {
    let [likeD,setLike]=useState(false)
    let [obj,setObj]=([])
    const dispatch = useDispatch()
    
    
    
    
    
    // const allFilter=useSelector(state => state.filter);
    
    let id = match.params.id
    // let index = allFilter.findIndex(el=>el.id===id);
    // let obj = allFilter[index];
    // console.log(obj)
    axios.get(`http://127.0.0.1:8000/api/v1/ad/${id}`).then(res=>setObj(res.data)).catch(err=>console.log(err))
    console.log(obj)
    
    let deleteBlog = id =>{
        // dispatch({
        //     type:DELETE_BLOG,
        //     payload:{
        //         id,
        //     }
        // })
        // setTimeout(()=>{
        //     window.history.go(-1)
        // })
    }

    let like = (id) =>{
        // dispatch({
        //     type:LIKE_BLOG,
        //     payload:{id},
        // })
        // setLike(true);
    };
    
    let unLike = (id) =>{
        // dispatch({
        //     type:UNLIKE_BLOG,
        //     payload:{id},
        // })
        // setLike(false);
    };

    return (
        <>
        {
            obj?.length >0 ?(
                <div>
                    
                </div>
            ):<div>not found</div>
        }
        </>
    )
}

export default FilterDetails
