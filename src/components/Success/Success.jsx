import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Success = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="flex">
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Thank you!
          </Typography>
          <Button onClick={handleClick} variant="contained">
              Leave New Feedback
            </Button>
        </CardContent>
        <div className="button-container">
        </div>
      </Card>
    </div>
  );
};

export default Success;
