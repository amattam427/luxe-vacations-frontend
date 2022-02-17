import React from 'react';

function LuxeItem({vacation}){
    const {id, name, location, image, like} = vacation 
    
    const imageSize={
        width:'300px',
        height: '200px' 
     }

    return (
        <div>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <img style={imageSize} src={image} alt={name}/>
        </div>
    )
}


export default LuxeItem; 