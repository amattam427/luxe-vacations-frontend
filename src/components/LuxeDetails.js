import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";


function LuxeDetails(){
    const {id} = useParams();

    const [details, setDetails] = useState([])

    useEffect (()=> {
        fetch(`http://localhost:4000/reviews/${id}`)
        .then((r)=>r.json())
        .then((data)=>{
            setDetails(data)
            console.log(data)
        });
    },[id])
    
    

    return(
        <div>
        
            <h2>{details.comment}</h2>

         
        </div>
    )

}



export default LuxeDetails;