import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const Review = () => {
  const history = useHistory();
  const feedback = useSelector(store => store.feedback)

  const handleClick = () => {
    history.push('/success')
  }

  return (
    <div>
      <h1>Review your feedback</h1>
      <p>Feelings: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.supported}</p>
      <p>Comments: {feedback.comment}</p>
      <Button onClick={handleClick} variant="contained">Submit</Button>
    </div>
  )
}

export default Review;