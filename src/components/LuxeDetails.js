import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";


function LuxeDetails(){
    const {id} = useParams();

    const [details, setDetails] = useState([])


    useEffect (()=> {
        fetch(`http://localhost:4000/accommodations/${id}`)
        .then((r)=>r.json())
        .then((data)=>{
            setDetails(data)
            console.log(data)
        });
    },[id])
    
    const imageSize={
        width:'800px',
        height: '500px' 
     }

    return(
        <div>
            <h2>{details.name}</h2>
            <h3>{details.location}</h3>
            <img style={imageSize} src={details.image} alt={details.name}/>
            <p>{details.description}</p>

         
        </div>
    )

}



export default LuxeDetails;