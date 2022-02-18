import React from "react";


function LuxeReviews({comments, reviewsId, onDeleteReview}){
    
  

    function handleDelete(){
        fetch(`http://localhost:4000/reviews/${reviewsId}`,{
            method: "DELETE",
        });
        onDeleteReview(reviewsId);
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