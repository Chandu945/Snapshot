import React, { useContext, useState } from "react";
import { UserContext } from "./App";

const Header = () =>{
    const [search , setsearh] = useState("")
    const data = useContext(UserContext)
    const handle = () =>{
        if(search == "Mountains" || search=="mountains" || search=="mountain" || search=="mountains" ){
            data.setinput("Mountains")
        }else if(search == "Beaches" || search=="Beach" || search=="beaches" || search=="beach"){
            data.setinput("Beaches")
        }else if(search == "Birds" || search=="Bird" || search=="birds" || search=="bird"){
            data.setinput("Birds")
        }else if(search == "Foods" || search=="Food" || search=="food" || search=="foods"){
            data.setinput("Food")
        }
    }
    const apply = (e) =>{
        data.setinput(e)
    }
    let set = `${data.input} pictures`
    return(
        <>
        <h1 id="head">SNAPSHOT</h1>
        <input type="text" onChange={(e)=>{setsearh(e.target.value)}}></input>
        <button onClick={handle}>submit</button>
        <div id="div">
            <div className="click" onClick={(e)=>{apply('Mountains')}}>Mountains</div>
            <div className="click" onClick={(e)=>{apply('Beaches')}}>Beaches</div>
            <div className="click" onClick={(e)=>{apply('Birds')}}>Birds</div>
            <div className="click" onClick={(e)=>{apply('Food')}}>Food</div>
        </div>
        <div id="pic">{set}</div>
        </>
    )
} 

export default Header