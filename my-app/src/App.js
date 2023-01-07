/* eslint-disable react/prop-types */
import React from 'react';

const App = ({ children }) => (
  <div>
    {/* <Header /> */}
    <div className="content">
      {children}
    </div>
  </div>
);

export default App;
