import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import axios from "axios";

const Review = () => {
  const history = useHistory();
  const feedback = useSelector((store) => store.feedback);

  const handleSubmit = () => {
    axios
      .post("/feedback", feedback)
      .then((response) => {
        console.log(response);
        history.push("/success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBack = () => {
    history.push("/comment");
  };

  return (
    <div>
      <div className="flex">
        <Card sx={{ minWidth: 350 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Review your feedback
            </Typography>
            <div className="flex-start">
              <Typography>Feelings: {feedback.feeling}</Typography>
              <Typography>Understanding: {feedback.understanding}</Typography>
              <Typography>Support: {feedback.supported}</Typography>
              <Typography>Comments: {feedback.comment}</Typography>
            </div>
          </CardContent>
          <div className="button-container">
            <CardActions>
              <Button onClick={handleBack} variant="contained">
                Back
              </Button>
              <Button onClick={handleSubmit} variant="contained">
                Submit
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Review;
