import './players.module.scss';
import { getPlayers } from '../usePlayers';
import { PlayersProps } from '@envfutbolpro/types';

export function Players(props: PlayersProps) {
  const name = props.players;
  return (
    <div>
      <h1>Welcome to Players! {name}</h1>
    </div>
  );
}

export default Players;
