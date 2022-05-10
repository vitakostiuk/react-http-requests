import React, { Component } from 'react';
import PocemonInfo from './components/PocemonInfo';
import PocemonForm from './components/PocemonForm';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div>
        <PocemonForm onSubmit={this.handleFormSubmit} />
        <PocemonInfo pokemonName={this.state.pokemonName} />
      </div>
    );
  }
}
