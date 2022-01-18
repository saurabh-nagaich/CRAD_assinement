import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function EditfILTER({match}) {
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
    
    let id = match.params.id
    const allFilter=useSelector(state => state.filter);
    let index = allFilter.findIndex(el=>el.id===id);
    let obj = allFilter[index];
    console.log(allFilter)

    useEffect(()=>{
        setName(obj.title);
        setHeadline(obj.categories);
        setType(obj.content);
        setContentUrl(obj.content);
        setDestinationUrl(obj.content);
        setPrimaryText(obj.content);
    },[obj])


    let updateFilter=()=>{
        // dispatch({
        //     // type:EDIT_BLOG,
        //     payload:{
        //         id,
        //         title:title,
        //         categories,
        //         content,
        //     }
        // })
        setTimeout(()=>{
            console.log("rest");
            window.history.go(-1)
        })
    }


    return (
        <div>
            {/* <Link to={"/"} className="btn_Link" style={{ textDecoration: 'none' }}><div className="addBlog">Back to Home</div></Link> */}
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
                                <Button variant="outlined" onClick={updateFilter}>Create</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default EditfILTER
