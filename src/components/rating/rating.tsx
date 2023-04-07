import { RatingProps } from "./rating.props"
import styles from "./rating.module.css"
import cn from "className"
import { useState } from "react"

const Rating = ({isEditabled =false,rating,setRating, ...props}:RatingProps):JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
  return (
    <div className={cn(styles.rating)} {...props} >Rating</div>
  )
}

export default Rating