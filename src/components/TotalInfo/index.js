import React from 'react';
import TitleText from '../TitleText';

import './index.css';

const TotalInfo = ({ title, price, extra }) => (
  <div className="total-info">
    <TitleText>{ title }</TitleText>
    <div>
      <TitleText>{ price }</TitleText>
      {extra && <div className="extra-info">{ extra }</div>}
    </div>
  </div>
);

export default TotalInfo;

