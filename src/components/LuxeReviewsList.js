import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import LuxeReviews from './LuxeReviews';
import NewReviewForm from './NewReviewForm';

function LuxeReviewList({detailsId}){
    const [reviews, setReviews] = useState([])
    const {id} = useParams();

    useEffect (()=> {
        fetch(`http://localhost:4000/accommodations/${id}/reviews`)
        .then((r)=>r.json())
        .then((data)=>{
            console.log(data)
            setReviews(data)
    
        });
    },[id])

    function handleAddReview(newReview){
        const updatedReviewArr = [...reviews, newReview];
        setReviews(updatedReviewArr);
    }

    function handleDeleteReview(id){
        const updatedReviewArr = reviews.filter((review)=> review.id !== id);
        setReviews(updatedReviewArr)
    }



    return(
        <div className="review-list">
            <NewReviewForm reviews={reviews} setReviews={setReviews} detailsId={detailsId} key={detailsId} onAddReview={handleAddReview}/>
            <div className="reviews">
            {reviews.map((r)=>
            <LuxeReviews key={r.id} reviewsId={r.id} comments={r.comment} onDeleteReview={handleDeleteReview}/>
            )}
            </div>

        </div>
    )





}



export default LuxeReviewList;