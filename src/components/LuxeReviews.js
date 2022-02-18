import React from "react";
import {useParams} from "react-router-dom";

function LuxeReviews({comments, onDeleteReview}){
    const {id, comment} = comments
  

    function handleDelete(){
        fetch(`http://localhost:4000/reviews${id}`,{
            method: "DELETE",
        });
        onDeleteReview(id);
    }



    return(
        <div>
            <ul>
                <li>{comments}</li>
                <button onClick={handleDelete}>Delete</button>
            </ul>

        </div>

    
    )



    

}








export default LuxeReviews;