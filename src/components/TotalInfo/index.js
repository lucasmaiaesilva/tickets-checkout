import React from 'react';
import TitleText from '../TitleText';

import './index.css';

const TotalInfo = () => (
  <div className="total-info">
    <TitleText>Total sem desconto</TitleText>
    <div>
      <TitleText>R$ 1.089, 90</TitleText>
      <div className="extra-info">em até 12x</div>
    </div>
  </div>
);

export default TotalInfo;

