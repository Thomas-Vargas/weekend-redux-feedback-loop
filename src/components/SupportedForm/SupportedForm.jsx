import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SupportedForm = () => {
  const [support, setSupport] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (support != "") {
      dispatch({
        type: "SET_SUPPORTED",
        payload: support,
      });
      setSupport("");
      history.push("/comment");
    } else {
      alert("Please provide input.");
    }
  };

  const handleBack = () => {
    history.push("/understanding");
  };

  const handleChange = (event) => {
    if (support + event.target.value <= 5) {
      setSupport(event.target.value);
    }
  };

  return (
    <>
      <div className="flex">
        <Card sx={{ minWidth: 350 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Howw well are you being supported?
            </Typography>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              Choose number between 1 and 5.
            </Typography>
          </CardContent>
          <TextField
            onChange={(event) => handleChange(event)}
            id="outlined-basic"
            label="Support?"
            variant="outlined"
            type="number"
            value={support}
          />
          <div className="button-container">
            <CardActions>
              <Button onClick={handleBack} variant="contained">
                Back
              </Button>
              <Button onClick={handleNext} variant="contained">
                Next
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SupportedForm;
