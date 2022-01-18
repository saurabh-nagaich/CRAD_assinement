import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link,Redirect } from 'react-router-dom'
import { createNewFilter } from '../redux/filter/filterAction'
import axios from "axios";
import { CREATE_FILETER } from '../redux/filter/filterType'

// import { ADD_BLOG } from '../redux/blog/blogType'

function CreateFilterNew() {
    const [name,setName] = useState("")
    const [headline,setHeadline] = useState("")
    const [type,setType] = useState("")
    const [contentUrl,setContentUrl] = useState("")
    const [destinationUrl,setDestinationUrl] = useState("")
    const [primaryText,setPrimaryText] = useState("")

    const dispatch = useDispatch()

    let handleChange=(event,handler)=> {
        switch(handler){
            case "name": return setName(e=>event.target.value);
            case "headline": return setHeadline(e=>event.target.value);
            case "type": return setType(e=>event.target.value);
            case "contentUrl": return setContentUrl(e=>event.target.value);
            case "destinationUrl": return setDestinationUrl(e=>event.target.value);
            case "primaryText": return setPrimaryText(e=>event.target.value);
            default: return;
        }
    }

    let createFilter=()=>{
        let data = {
            name,
            headline,
            type,
            primary_text: primaryText,
            content_url:contentUrl,
            destination_url:destinationUrl,
            meta_data: {
                name
            }
        }
        axios({
            method: "post",
            url:"http://127.0.0.1:8000/api/v1/ad",
            data: data,
        })
            .then((res) =>{
                dispatch({
                    type: CREATE_FILETER,
                    payload: res.data,
                })
                setTimeout(()=>{
                    console.log("rest");
                    window.history.go(-1)
                });
            }
            )
            .catch((err) => {
                console.log(err);
            });
        // dispatch(createNewFilter(data));

    }

    return (
        <div className='background'>
            <div className="container_auth login_box">
                <div className="auth_container">
                    <div className="auth_section">
                        <div className={`login_container`}>
                            <h3 className="auth_header">Create Filter</h3>
                            <input type="text" className="input_field" value={name} onChange={(e)=>handleChange(e,"name")} placeholder="Name" />
                            <input type="text" className="input_field" value={headline} onChange={(e)=>handleChange(e,"headline")} placeholder="Headline" />
                            <select value={type} className='upload_field' onChange={(e)=>handleChange(e,"type")}> 
                                <option value="IMAGE_AD" id="IMAGE_AD">IMAGE_AD</option> 
                                <option value="VIDEO_AD" id="VIDEO_AD">VIDEO_AD</option> 
                            </select>
                            <input type="text" className="input_field " value={contentUrl} onChange={(e)=>handleChange(e,"contentUrl")} placeholder="content_url"/>
                            <input type="text" className="input_field" value={destinationUrl} onChange={(e)=>handleChange(e,"destinationUrl")} placeholder="Destination_url" />
                            <textarea type="text" className="input_field" value={primaryText} onChange={(e)=>handleChange(e,"primaryText")} placeholder="primary_text" />
                            <div className="login_btn">
                                <Button variant="outlined" onClick={createFilter}>Create</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateFilterNew
