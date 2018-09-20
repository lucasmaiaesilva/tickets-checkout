import React from 'react';

import './index.css';

const Select = ({ quantities, ticketId, disabled, handleChange, price, discount }) => (
  <div className="select">
    <select disabled={disabled} onChange={(e) => handleChange(price, ticketId, e, discount)}>
      <option value={1}>-</option>
      {quantities.map(item => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  </div>
);

Select.defaultProps = {
  disabled: false 
};

export default Select;

