import React from 'react';

import './index.css';

const Button = ({ children }) => (
  <div className="button-wrapper">
    <button>
      { children }
    </button>
  </div>
);

export default Button;

