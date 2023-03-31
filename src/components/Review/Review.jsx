import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Review = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div>
      <h1>Review your feedback</h1>
      <p>Feelings: TEST</p>
      <p>Understanding: TEST</p>
      <p>Support: TEST</p>
      <p>Comments: TEST</p>
      <Button onClick={handleClick} variant="contained">Submit</Button>
    </div>
  )
}

export default Review;