import React from 'react';
import {useState} from 'react';
import './Skeleton.css'; // Import the CSS for skeleton styles

// Skeleton Component
const Skeleton = ({ width, height, borderRadius = '4px' }) => {
  return (
    <div
      className="skeleton"
      style={{ width, height, borderRadius }}
    ></div>
  );
};

// Example usage of Skeleton component for a card-like structure
const App1 = () => {

    const [loading,setLoading] = useState(true);
    const [hover,setHover] = useState(0);
 // Simulating loading state
  return (
    <div className="p-4 z-0" onClick={() => {setHover(0)}}>
      {loading ? (
        <div className="flex flex-col gap-4">
          <Skeleton width="100%" height="20px" />
          <Skeleton width="80%" height="20px" />
          <Skeleton width="60%" height="20px" />
          <Skeleton width="100%" height="150px" borderRadius="8px" />

          <button onClick={() => setLoading(!loading)}>Click Me</button>


          <div onMouseEnter={() => setHover(1)}>Hover me to see Magic!!!</div>
          <div style={{opacity:hover}}  onClick={() => {setHover(1)}} className='z-30 bg-red-200'>The Hovering Magic is Here!!!</div>
        </div>
      ) : (
        <div>
          <h1>Loaded Content</h1>
          <p>This content is displayed after loading.</p>
          <button onClick={() => setLoading(!loading)}>Click Me</button>
        </div>
      )}
    </div>
  );
};

export default App1;
