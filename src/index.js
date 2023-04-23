import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Final from './Final';
import Hint from './Hint';
import Starburns from './Starburns';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
