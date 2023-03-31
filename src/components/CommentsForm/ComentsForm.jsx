import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (comment != '') {
      dispatch({
        type: 'SET_COMMENT',
        payload: comment
      })
      setComment('');
      history.push('/review');
    }
    else {
      alert('Please provide input');
    }
  }

  const handleBack = () => {
    history.push('/support')
  }

  return (
    <>
      <div className="flex">
        <Card sx={{ minWidth: 350 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Any comments you want to leave?
            </Typography>
          </CardContent>
          <TextField
            onChange={(event) => setComment(event.target.value)}
            id="outlined-basic"
            label="Comments"
            variant="outlined"
            type="text"
            value={comment}
          />
          <div className="button-container">
            <CardActions>
              <Button onClick={handleBack} variant="contained">
                Back
              </Button>
              <Button onClick={handleNext} variant="contained">
                Next
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CommentForm;