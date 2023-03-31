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
      setUnderstanding('');
      history.push('/support');
    }
    else {
      alert('Please provide input.');
    }
  }

  const handleChange = (event) => {
    if (understanding + event.target.value <= 5) {
      setUnderstanding(event.target.value);
    }
  }


  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <div className="flex">
        <TextField
          onChange={(event) => handleChange(event)}
          id="outlined-basic"
          label="Understanding?"
          variant="outlined"
          type="number"
          value={understanding}
        />
        <Button onClick={handleClick} variant="contained">Next</Button>
      </div>
    </>
  );
};

export default UnderstandingForm;
