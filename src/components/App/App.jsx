import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import { HashRouter as Router, Route, Link} from "react-router-dom";
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentForm from '../CommentsForm/ComentsForm';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path='/' exact>
          <FeelingForm />
        </Route>
        <Route path='/understanding' exact>
          <UnderstandingForm />
        </Route>
        <Route path='/support' exact>
          <SupportedForm />
        </Route>
        <Route path='/comment' exact>
          <CommentForm />
        </Route>
        <Route path='/review' exact>
          <Review />
        </Route>
        <Route path='/success' exact>
          <Success />
        </Route>
        <Route path='/admin' exact>
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
