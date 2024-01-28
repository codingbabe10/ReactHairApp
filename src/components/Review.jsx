export default function Review ({review}) {

    return(
        <p>
            <b>{review.user.username} </b><br />
            {review.body}
        </p>
    )
}