import React, { useState } from "react";
import './index.css'
import { useNavigate } from "react-router-dom";

export default function Screen1() {
  const navigate=useNavigate();

  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();

if(userName.trim()===""){
  alert("Username is required");
  return;
}
if(password.length<6){
  alert("Password must be atleast 6 characters");
  return;
}

    navigate("/home")
  }
  return (
    <>

      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
         <label>Username: </label>
         <input type="text"  placeholder="enter username" value={userName} onChange={(e)=>setUserName(e.target.value) } /> <br/><br/>
         <label>Password: </label>
         <input type="password"  placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br/><br/>
         <label>Mobie No: </label>
         <input type="tel" id="mobile"  pattern="[0-9]{10}" maxlength="10" placeholder="enter mobile number" required/> <br/><br/><br/>
         <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}