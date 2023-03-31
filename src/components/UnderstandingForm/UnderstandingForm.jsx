import { TextField, Button } from "@mui/material";

const UnderstandingForm = () => {
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
        <Button variant="contained">Next</Button>
      </div>
    </>
  );
};

export default UnderstandingForm;
