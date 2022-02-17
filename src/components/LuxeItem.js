import React from 'react';

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
                <img style={imageSize} src={image} alt={name}/>
               <button>🤩{like}</button>
            
        </div>
    )
}


export default LuxeItem; 