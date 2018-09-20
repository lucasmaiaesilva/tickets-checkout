import React, { Component } from 'react';
import Card from './components/Card';
import TitleText from './components/TitleText';
import TotalInfo from './components/TotalInfo';
import Button from './components/Button';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      isLoading: true,
      checkouts: {},
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentWillReceiveProps({ data }) {
    const { event_offer } = data;
    const tickets = event_offer.ticket_offers;
    this.setState({
      tickets: tickets,  
      isLoading: false
    })
  }
  handleSelect(price, id, e) {
    const quantity = e.target.value;
    this.setState(prevState => ({
      checkouts: {
        ...prevState.checkouts,
        [id]: price * quantity
      }
    }))
  }
  render() {
    const { tickets, isLoading } = this.state;
    const totalValues = Object.keys(this.state.checkouts).map(item => this.state.checkouts[item]);
    const totalValue = totalValues.reduce((acc, act) => Number(acc + act), [0]);
    if (isLoading) {
      return <h1>Loading ...</h1>;
    }
    return (
      <div className="App">
        <TitleText>Selecionar ingressos</TitleText> 
        {tickets.nodes.map(type => {
          return type.batches.map(ticket => (
            <Card
              key={ticket.id}
              id={ticket.id}
              description={type.description}
              number={ticket.number}
              price={ticket.price}
              quantities={ticket.purchaseable_quantities}
              handleChange={this.handleSelect}
              isActive={ticket.number === 1}
            />
          ));  
        })}
        <TotalInfo
          title="Total sem desconto"
          price={`R$ ${Number(totalValue / 100).toFixed(2)}`}
          extra="em até 12x"
        />
        <Button>
          Confirmar Compra
        </Button>
      </div>
    );
  }
}

const Query = gql`
query eventOffer {
  event_offer(id:"lets-react-the-grand-tournament") {
    id
    name
    description
    photo {
      cover_url
    }
    address {
      name
      city
      state
      country
      street
    }
    ticket_offers {
      nodes {
        id
        name
        description
        batches {
          id
          number
          price
          purchaseable_quantities
          payment_methods {
            due_amount
            due_service_fee
            payment_type
          }
        }
      }
    }
  }
}
`;

export default graphql(Query)(App);
