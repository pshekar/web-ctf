import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Final from './ChallengeThree';
import Hint from './Hint';
import Starburns from './ChallengeTwo';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function NotFound() {
  return <Navigate to="/" />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/starburns" element={<Starburns />} />
      <Route path="/hint" element={<Hint />} />
      <Route path="/final" element={<Final />} />
      <Route path="*" element={NotFound} />
    </Routes>
  </Router>
);
