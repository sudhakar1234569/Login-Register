
import React,{ useState } from "react"
import "./homepage.css"
import Login from "../login/login"
const Homepage = ({setLoginUser}) =>{
   
    return (
        <div  className="homepage">
            <h1>welcome Sudhakar N!</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
} 

export default Homepage;