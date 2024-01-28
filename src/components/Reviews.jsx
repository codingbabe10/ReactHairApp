import { useState } from "react"
import Review from "./Review"


export const Reviews = () => {
   const [reviews, setReviews] = useState ([
		{
			"body": "Stacy gave me the best hair cut of my life!  She is amazing.",
			"id": "3",
			"timestamp": "2024-01-03T00:35:27.568774",
			"user_id": "1"
		},
		{
			"body": "Lulu is great at coloring my hair.  The shade of blonde that she uses goes with my skin tone perfectly.",
			"id": "4",
			"timestamp": "2024-01-03T00:54:46.188100",
			"user_id": "1"
		},
		{
			"body": "Glam salon is beautiful and Cali did a really good job, my hair looks great!!",
			"id": "5",
			"timestamp": "2024-01-03T00:54:49.010977",
			"user_id": "1"
		},
		{
			"body": "Glow Salon is the best.  I highly recommend!",
			"id": "6",
			"timestamp": "2024-01-03T00:54:50.843257",
			"user_id": "1"
		}
	])
    
     


  
return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id}>
            <Review review={review} />
            <div>
              <button onClick={() => handleRemoveReview(review.id)}>
                Remove Review
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No Reviews to Display</p>
      )}
    </div>
  );
}

