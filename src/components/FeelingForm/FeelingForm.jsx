import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';

const FeelingForm = () => {
  const [feeling, setFeeling] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (feeling != '') {
      dispatch({
        type: 'SET_FEELING',
        payload: feeling
      })
      setFeeling('');
      history.push('/understanding')
    }
    else {
      alert('Please provide input.')
    }
  };

  return (
    <>
      <h1>How are you feeling today?</h1>
      <div className="flex">
        <TextField
          onChange={(event) => setFeeling(event.target.value)}
          id="outlined-basic"
          label="What are you feeling?"
          variant="outlined"
          type="number"
          value={feeling}
        />
        <Button onClick={handleClick} variant="contained">
          Next
        </Button>
      </div>
    </>
  );
};

export default FeelingForm;
