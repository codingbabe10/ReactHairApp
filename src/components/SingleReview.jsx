export default function SingleReview ({review}) {

    return(
        <p>
            <b>{review.user.username} </b><br />
            {review.body}
        </p>
    )
}