import { TextField, Button } from "@mui/material";

const SupportedForm = () => {
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
        <Button variant="contained">Next</Button>
      </div>
    </>
  );
};

export default SupportedForm;
