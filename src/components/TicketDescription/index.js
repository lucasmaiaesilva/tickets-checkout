import React, { Component } from 'react';

import './index.css';

class TicketDescription extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    };
    this.toggleMessage = this.toggleMessage.bind(this);
  }
  toggleMessage() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }
  render() {
    return (
      <div className="description">
        <button onClick={this.toggleMessage}>
          {this.state.isOpened ? 'Ocultar Descrição' : 'Mostrar Descrição'}
        </button>
        {this.state.isOpened && <p>{ this.props.text }</p>}
      </div>
    );
  }
};

export default TicketDescription;

