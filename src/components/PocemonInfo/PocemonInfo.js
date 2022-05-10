import React, { Component } from 'react';
import { PokemonErrorViev } from '../PokemonErrorViev';
import { PokemonDataViev } from '../PokemonDataViev/PokemonDataViev';
import { PokemonPendingViev } from '../PokemonPendingViev/PokemonPendingViev';
import { fetchPokemon } from '../../services/pokemon-api';

export default class PocemonInfo extends Component {
  state = {
    pokemon: null,
    // loading: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <p>Введите имя покемона</p>;
    }
    if (status === 'pending') {
      return <PokemonPendingViev pokemonName={pokemonName} />;
    }
    if (status === 'rejected') {
      return <PokemonErrorViev message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataViev pokemon={pokemon} />;
    }
    // return (
    //   <div>
    //     {error && <p>{error.message}</p>}
    //     {loading && <p>Загружаем</p>}
    //     {!pokemonName && <p>Введите имя покемона</p>}
    //     {pokemon && (
    //       <div>
    //         <h2>{pokemon.name}</h2>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           alt={pokemon.name}
    //           width="150"
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}
