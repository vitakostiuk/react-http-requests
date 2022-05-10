import { ImSpinner3, ImSpinner11 } from 'react-icons/im';
import s from './PokemonPendingViev.module.css';
import { PokemonDataViev } from '../PokemonDataViev/PokemonDataViev';

export const PokemonPendingViev = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: <ImSpinner11 />,
        },
      },
    },
    stats: [],
  };
  return (
    <div role="alert">
      <div>
        <ImSpinner3 size="32" className={s.IconSpin} />
        Loading...
      </div>
      <PokemonDataViev pokemon={pokemon} />
    </div>
  );
};
