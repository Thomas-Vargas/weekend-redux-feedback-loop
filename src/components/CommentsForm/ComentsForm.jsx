import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';

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
      <h1>Any comments you want to leave?</h1>
      <div className="flex">
        <TextField
          onChange={(event) => setComment(event.target.value)}
          id="outlined-basic"
          label="Comments"
          variant="outlined"
          type="text"
          value={comment}
        />
        <Button onClick={handleBack} variant="contained">Back</Button>
        <Button onClick={handleNext} variant="contained">Next</Button>
      </div>
    </>
  );
};

export default CommentForm;