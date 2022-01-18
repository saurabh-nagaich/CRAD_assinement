import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from "axios";
import { ADD_FILETER, EDIT_FILETER, DELETE_FILETER, LIKE_FILETER } from "./../redux/filter/filterType"


import { addFilter, resetDB } from '../redux/filter/filterAction'
import FilterList from './FilterList'
import { Button } from '@mui/material';


function Home() {

    const dispatch = useDispatch()
    useEffect(() => {
        console.log("hit")
        dispatch(addFilter());
    }, [])

    const loaddata = ()=>{
        dispatch(addFilter());
    }
    
    const reset = () =>{
        dispatch(resetDB());
    }
    return (
        <div>
            <div style={{display:"flex",justifyContent: "space-between",alignItems: "center",margin:"1rem"}}>
                <Button className='btn'  variant="outlined" onClick={loaddata}>load</Button>
                <Button className='btn'  variant="outlined" onClick={reset}>Reset Db</Button>
                <Link to={"/createFilter"} className="btn_Link" style={{ textDecoration: 'none' }}><Button  variant="outlined" className="addBlog">Add New Filter</Button></Link>
            </div>
            <FilterList />
        </div>
    )
}

export default Home
