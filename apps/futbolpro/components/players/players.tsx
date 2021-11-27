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
    <div className="section">
      <h1>Players</h1>
      <div className="flex-wrap">
        {players.map((player) => {
        return (
          <>
            <div className="card">
              <img src={player.player.photo} alt="" />
              <p>{player.player.name}</p>
              <p><small>{player.player.age} años</small></p>
            </div>
          </>
        );
      })}
      </div>
    </div>
  );
}

export default Players;
