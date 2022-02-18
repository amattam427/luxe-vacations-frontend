import React from 'react';
import {Link} from "react-router-dom"

function LuxeItem({vaca, onUpdate}){
    const {id, name, location, image, like} = vaca
    
    const imageSize={
        width:'400px',
        height: '300px' 
     }

    function handleUpdateLikes(){
        const updateLikes = {
            like:vaca.like + 1,
        };

        fetch(`http://localhost:4000/accommodations/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateLikes),
        })
            .then((r)=>r.json())
            .then(onUpdate)
    }


    return (
        <div className="div1">
            
                <h2 className="resort-name">{name}</h2>
                <h3 className="location">{location}</h3>
            <div className="div2">
            <img className= "image" style={imageSize} src={image} alt={name}/>
            </div>
               <button className="like-button" onClick={handleUpdateLikes}>🤩{like}</button>
               <Link to={`details/${id}`}>
               <button className= "details-button">Take Me There!</button>
               </Link>
            
        </div>
    )
}


export default LuxeItem; 