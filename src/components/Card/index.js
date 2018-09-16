import React, { Component } from 'react';
import TicketDescription from '../TicketDescription';
import './index.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="detail">
          <div className="block">
            <p>Royal - lote 1</p>
            <p className="price">
              <span>R$ 1.000,00</span>
              <span>(+ R$ 89,90 em taxas)</span>
            </p>
          </div>
          <div className="select">
            <select>
              <option value="">-</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
        </div>
        <TicketDescription text="lorem ipsum kajshkahsdkjahsd"  />
      </div> 
    );
  }
};

export default Card;

