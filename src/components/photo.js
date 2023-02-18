import React, { useEffect, useState } from "react";
import axios from 'axios';
import "regenerator-runtime/runtime"
import Card from "./card";
import "../styles/App.css"
import { UserContext } from "./App";
import { useContext } from "react";

const Photo = () => {
    let dat = useContext(UserContext)
    console.log(dat.input)
    const [data , setdata] = useState([])
    useEffect(() => {
       axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b86459520e718658dcf5d49c0308a2bc&tags=${dat.input}&format=json&nojsoncallback=1`)
       .then((res)=>{setdata(res.data.photos.photo)})
    }, [dat.input])
    return (
        <div id="card">
            {
                data.map((value,index)=>{
                    let farm = value.farm
                    let server = value.server
                    let id = value.id
                    let secret = value.secret 
                    let img = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
                    return(
                        <div key={index} className="img">
                            <Card img={img}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Photo