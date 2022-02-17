import React from 'react';
import {Link} from "react-router-dom"

function LuxeItem({vaca}){
    const {id, name, location, image, like} = vaca
    
    const imageSize={
        width:'300px',
        height: '200px' 
     }

    return (
        <div>
            
                <h2>{name}</h2>
                <h3>{location}</h3>
                <Link to={`details/${id}`}>
                <img style={imageSize} src={image} alt={name}/>
                </Link>
               <button>🤩{like}</button>
            
        </div>
    )
}


export default LuxeItem; 