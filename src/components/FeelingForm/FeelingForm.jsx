import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FeelingForm = () => {
  const [feeling, setFeeling] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (feeling != "") {
      dispatch({
        type: "SET_FEELING",
        payload: feeling,
      });
      setFeeling("");
      history.push("/understanding");
    } else {
      alert("Please provide input.");
    }
  };

  const handleChange = (event) => {
    if (feeling + event.target.value <= 5) {
      setFeeling(event.target.value);
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
              How are you feeling today?
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
            label="What are you feeling?"
            variant="outlined"
            type="number"
            value={feeling}
          />
          <CardActions>
            <div className="button-container">
              <Button onClick={handleClick} variant="contained">
                Next
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default FeelingForm;
