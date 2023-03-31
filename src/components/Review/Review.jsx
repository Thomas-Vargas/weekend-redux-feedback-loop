import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

const Review = () => {
  const history = useHistory();
  const feedback = useSelector(store => store.feedback)

  const handleSubmit = () => {
    axios.post('/feedback', feedback)
      .then(response => {
        console.log(response);
        history.push('/success')
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleBack = () => {
    history.push('/comment')
  }

  return (
    <div>
      <h1>Review your feedback</h1>
      <p>Feelings: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.supported}</p>
      <p>Comments: {feedback.comment}</p>
      
      <div className="flex">
        <Button onClick={handleBack} variant="contained">Back</Button>
        <Button onClick={handleSubmit} variant="contained">Submit</Button>
      </div>
    </div>
  )
}

export default Review;