import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const FeelingForm = () => {
  const history = useHistory();

  const handleClick = () => {
    console.log("hello");
    history.push('/understanding')
  };

  return (
    <>
      <h1>How are you feeling today?</h1>
      <div className="flex">
        <TextField
          onChange={(event) => console.log(event.target.value)}
          id="outlined-basic"
          label="What are you feeling?"
          variant="outlined"
          type="number"
        />
        <Button onClick={handleClick} variant="contained">
          Next
        </Button>
      </div>
    </>
  );
};

export default FeelingForm;
