import React, {useState} from "react";

function NewReviewForm({detailsId, onAddReview}){
    const [comment, setComment] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:4000/reviews', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: comment,
                accommodation_id: detailsId
            }),
        })
            .then((r)=>r.json())
            .then((newReview)=> onAddReview(newReview))
            setComment('');
    }


    return(
        <div>
            <h3>Add A Review</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="comment" placeholder="Write a Review!" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
           
        </div>

    )


}

export default NewReviewForm;