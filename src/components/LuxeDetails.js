import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import LuxeReviewsList from './LuxeReviewsList';



function LuxeDetails(){
    const {id} = useParams();

    const [details, setDetails] = useState([])
    



    useEffect (()=> {
        fetch(`http://localhost:4000/accommodations/${id}`)
        .then((r)=>r.json())
        .then((data)=>{
            console.log(data)
            setDetails(data)
    
        });
    },[id])




    
    const imageSize={
        width:'750px',
        height: '500px' 
     }

    return(
        <div className="details-body">
            <h2 className="details-name">{details.name}</h2>
            <h3 className="details-location">{details.location}</h3>
            <div className="details-image">
            <img  style={imageSize} src={details.image} alt={details.name}/>
            </div>
            <div className="about-desc">
            <h3 className="desc-about">About:</h3>
            <p className="description">{details.description}</p> 
            </div>
            <h2 className="review-title">Reviews:</h2>
            <LuxeReviewsList detailsId={details.id}/>  
        </div>
    )

}



export default LuxeDetails;