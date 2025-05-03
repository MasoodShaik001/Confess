// Screen1.js

import React from 'react';

const Screen1 = () => {
  const backgroundStyle = {
    backgroundColor: 'darkblue',
    height: '100vh', // 100% of the viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={backgroundStyle}>
      {/* Add your content inside this div if needed */}
      <h1 style={{ color: 'white' }}>Hello, this is a dark blue background!</h1>
    </div>
  );
};

export default Screen1;
