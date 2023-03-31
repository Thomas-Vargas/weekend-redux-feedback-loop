import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Success = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Thank you!</h1>
      <Button onClick={handleClick} variant="contained">
        Leave New Feedback
      </Button>
    </div>
  );
};

export default Success;
