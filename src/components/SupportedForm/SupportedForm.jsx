import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const SupportedForm = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/comment')
  }

  return (
    <>
      <h1>How well are you being supported?</h1>
      <div className="flex">
        <TextField
          onChange={(event) => console.log(event.target.value)}
          id="outlined-basic"
          label="Support?"
          variant="outlined"
          type="number"
        />
        <Button onClick={handleClick} variant="contained">Next</Button>
      </div>
    </>
  );
};

export default SupportedForm;
