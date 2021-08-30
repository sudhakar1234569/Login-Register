import React,{ useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router"
const Register = () => {
    
    const history = useHistory()
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    
     const handleChange = e => {
     
         const {name, value} = e.target
         //console.log(name ,value)
         setUser({
             ...user,
             [name]:value
         })
     }
     const register = () =>{
        const {name,email,password,reEnterPassword} = user
        if(name && email && password && (password ===reEnterPassword)){
      
            axios.post("http://localhost:9002/register",user)
            .then(res => {
                alert(res.data.message)
                
                history.push("/login")
                        
            })
        }
        else{
            alert("Invaild Data")
        }
     }
    return (
        <div className="register">
            {console.log("user",user)}
            {console.log("user",user.name)}
            <h1>Register</h1>
            <input type="text"  name="name" value={user.name} placeholder="Enter your Name" onChange={ handleChange }></input>
            <input type="text"  name="email" value={user.email}  placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="enter your password" onChange={ handleChange }></input>
            <input type="password"  name="reEnterPassword" value={user.reEnterPassword} placeholder="confirm your password" onChange={ handleChange }></input>
             <div className="button" onClick={register}>Register</div>
             <div>or</div>
             <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
} 

export default Register