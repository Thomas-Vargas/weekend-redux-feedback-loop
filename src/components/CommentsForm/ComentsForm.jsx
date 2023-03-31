import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const CommentForm = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/review');
  }

  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <div className="flex">
        <TextField
          onChange={(event) => console.log(event.target.value)}
          id="outlined-basic"
          label="Comments"
          variant="outlined"
          type="text"
        />
        <Button onClick={handleClick} variant="contained">Next</Button>
      </div>
    </>
  );
};

export default CommentForm;