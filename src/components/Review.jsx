export default function Review ({review}) {

    return(
        <p>
            {/*<b>{review.author} </b><br /> */}
            {review.body}
        </p>
    )
}