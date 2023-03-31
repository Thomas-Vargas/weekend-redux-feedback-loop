import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const UnderstandingForm = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/support');
  }

  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <div className="flex">
        <TextField
          onChange={(event) => console.log(event.target.value)}
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
