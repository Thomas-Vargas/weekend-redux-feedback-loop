import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';

const SupportedForm = () => {
  const [support, setSupport] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (support != '') {
      dispatch({
        type: 'SET_SUPPORTED',
        payload: support
      })
      setSupport('');
      history.push('/comment');
    }
    else {
      alert('Please provide input.');
    }
  }

  const handleBack = () => {
    history.push('/understanding');
  }

  const handleChange = (event) => {
    if (support + event.target.value <= 5) {
      setSupport(event.target.value)
    }
  }


  return (
    <>
      <h1>How well are you being supported?</h1>
      <div className="flex">
        <TextField
          onChange={(event) => handleChange(event)}
          id="outlined-basic"
          label="Support?"
          variant="outlined"
          type="number"
          value={support}
        />
        <Button onClick={handleBack} variant="contained">Back</Button>
        <Button onClick={handleNext} variant="contained">Next</Button>
      </div>
    </>
  );
};

export default SupportedForm;
