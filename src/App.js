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
  handleSelect(price, id, e, discount) {
    const quantity = e.target.value;
    this.setState(prevState => ({
      checkouts: {
        ...prevState.checkouts,
        [id]: {
          price,
          quantity,
          discount
        }
      }
    }))
  }
  generateTotalValue(data, withDiscount = false) {
    let values = [];
    if (withDiscount) {
      values = data.map(item => item.price * Number(item.quantity) - item.discount); 
    } else {
      values = data.map(item => item.price * Number(item.quantity)); 
    }
    return values.reduce((acc, act) => Number(acc + act), [0]);
  }
  getPaymentNode(node, strSearch) {
    return node.filter(payment => payment.payment_type === strSearch)[0]
  }
  render() {
    const { tickets, isLoading } = this.state;
    const totalValues = Object.keys(this.state.checkouts).map(item => this.state.checkouts[item]);
    if (isLoading) {
      return <h1>Loading ...</h1>;
    }
    return (
      <div className="App">
        <TitleText>Selecionar ingressos</TitleText> 
        {tickets.nodes.map(type => {
          // console.log(type);
          return type.batches.map(ticket => (
            <Card
              key={ticket.id}
              id={ticket.id}
              discount={this.getPaymentNode(ticket.payment_methods, 'BANK_SLIP').due_service_fee}
              taxes={this.getPaymentNode(ticket.payment_methods, 'CREDIT').due_service_fee}
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
          price={`R$ ${(this.generateTotalValue(totalValues) / 100).toFixed(2)}`}
          extra="em até 12x"
        />
        <TotalInfo
          title="Total com desconto"
          price={`R$ ${(this.generateTotalValue(totalValues, true) / 100).toFixed(2)}`}
          withDiscount
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
