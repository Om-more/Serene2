import React from 'react';
import { Link } from 'react-router-dom';

function Emotion() {
  return (
    <>
      <h1 className="text-center">Choose Emotion for test</h1>
      <div className="d-flex justify-content-center">
        <Link to="/quest1" className="btn btn-outline-primary m-3 col-6 p-3">Depression</Link>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/quest2" className="btn btn-outline-primary m-3 col-6 p-3">Anxiety</Link>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/quest3" className="btn btn-outline-primary m-3 col-6 p-3">Anger</Link>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/quest4" className="btn btn-outline-primary m-3 col-6 p-3">Procrastination</Link>
      </div>
    
    </>
  );
}

export default Emotion;
