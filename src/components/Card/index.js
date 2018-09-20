import React, { Component } from 'react';
import TicketDescription from '../TicketDescription';
import Select from '../Select';

import './index.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="detail">
          <div className="block">
            <p>Royal - lote {this.props.number}</p>
            <p className="price">
              <span>R$ {(this.props.price / 100).toFixed(2).replace('.', ',')}</span>
              <span>(+ R$ 89,90 em taxas)</span>
            </p>
          </div>
          <Select
            quantities={this.props.quantities}
            handleChange={this.props.handleChange}
            ticketId={this.props.id}
            price={this.props.price}
            disabled={!this.props.isActive}
          />
        </div>
        <TicketDescription text={this.props.description}  />
      </div> 
    );
  }
};

export default Card;

