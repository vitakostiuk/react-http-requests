export const PokemonDataViev = ({ pokemon: { sprites, name, stats } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="150"
      />
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};
