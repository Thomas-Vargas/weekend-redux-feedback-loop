import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UnderstandingForm = () => {
  const [understanding, setUnderstanding] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (understanding != "") {
      dispatch({
        type: "SET_UNDERSTANDING",
        payload: understanding,
      });
      setUnderstanding("");
      history.push("/support");
    } else {
      alert("Please provide input.");
    }
  };

  const handleBack = () => {
    history.push("/");
  };

  const handleChange = (event) => {
    if (understanding + event.target.value <= 5) {
      setUnderstanding(event.target.value);
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
              How well are you understanding the content?
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
            label="Understanding?"
            variant="outlined"
            type="number"
            value={understanding}
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

export default UnderstandingForm;
