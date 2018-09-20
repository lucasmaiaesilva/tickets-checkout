import React from 'react';
import TicketDescription from '../TicketDescription';
import Select from '../Select';

import './index.css';

const Card = ({
  number,
  price,
  taxes,
  quantities,
  handleChange,
  id,
  isActive,
  discount,
  description
}) => (
  <div className="card">
    <div className="detail">
      <div className="block">
        <p>Royal - lote {number}</p>
        <p className="price">
          <span>R$ {(price / 100).toFixed(2).replace('.', ',')}</span>
          <span>(+ R$ {(taxes / 100).toFixed(2)} em taxas)</span>
        </p>
      </div>
      <Select
        quantities={quantities}
        handleChange={handleChange}
        ticketId={id}
        price={price}
        disabled={!isActive}
        discount={discount}
      />
    </div>
    <TicketDescription text={description}  />
  </div> 
);

export default Card;

