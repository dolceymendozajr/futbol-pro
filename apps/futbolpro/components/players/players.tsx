import './players.module.scss';
import { getPlayers } from '../usePlayers';
import { PlayersProps } from '@envfutbolpro/types';
import { useEffect, useState } from 'react';

export function Players(props: PlayersProps) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getPlayers();
      setPlayers(result.data.response);
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to Players! </h1>
      {players.map((player) => {
        return (
          <>
            <div>{player.player.name}</div>
            <div>{player.player.age}</div>
            <div>{player.player.photo}</div>
          </>
        );
      })}
    </div>
  );
}

export default Players;
