import { ImNotification } from 'react-icons/im';

export const PokemonErrorViev = ({ message }) => {
  return (
    <div role="alert">
      <ImNotification />
      <p>{message}</p>
    </div>
  );
};
