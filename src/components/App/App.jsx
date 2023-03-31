import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import { HashRouter as Router, Route, Link} from "react-router-dom";
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path='/' exact>
          <FeelingForm to='/' />
        </Route>
        <Route path='/understanding-form' exact>
          <UnderstandingForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
