import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from "react";
 
const UnderstandingForm = () => {
  const [understanding, setUnderstanding] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (understanding != '') {
      dispatch({
        type: 'SET_UNDERSTANDING',
        payload: understanding
      })
      history.push('/support');
    }
    else {
      alert('Please provide input.');
    }
  }

  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <div className="flex">
        <TextField
          onChange={(event) => setUnderstanding(event.target.value)}
          id="outlined-basic"
          label="Understanding?"
          variant="outlined"
          type="number"
        />
        <Button onClick={handleClick} variant="contained">Next</Button>
      </div>
    </>
  );
};

export default UnderstandingForm;
