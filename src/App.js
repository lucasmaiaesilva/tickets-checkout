import React, { Component } from 'react';
import Card from './components/Card';
import TitleText from './components/TitleText';
import TotalInfo from './components/TotalInfo';
import Button from './components/Button';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './App.css';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps); 
  }
  render() {
    return (
      <div className="App">
        <TitleText>Selecionar ingressos</TitleText> 
        <Card />
        <TotalInfo
          title="Total sem desconto"
          price="1.089, 90"
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
