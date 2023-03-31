import React from "react";
import "./App.css";
import FeelingForm from "../FeelingForm/FeelingForm";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import SupportedForm from "../SupportedForm/SupportedForm";
import CommentForm from "../CommentsForm/ComentsForm";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Admin from "../Admin/Admin";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <h2 className="nav-title">Feedback</h2>
            <Router>
              <Link to='/admin' style={{ textDecoration: 'none', color: 'white' }}><Button variant="inherit">Admin</Button></Link>
            </Router>
            <Router>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button variant="inherit">Home</Button></Link>
            </Router>
          </Toolbar>
        </AppBar>
      </Box>

      <Router>
        <Route path="/" exact>
          <FeelingForm />
        </Route>
        <Route path="/understanding" exact>
          <UnderstandingForm />
        </Route>
        <Route path="/support" exact>
          <SupportedForm />
        </Route>
        <Route path="/comment" exact>
          <CommentForm />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
