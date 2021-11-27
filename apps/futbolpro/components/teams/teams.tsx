import './teams.module.scss';
import { getTeams } from '../useTeams';
import { TeamsProps } from '@envfutbolpro/types';
import { useEffect, useState } from 'react';

export function Teams(props: TeamsProps) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getTeams();
      setTeams(result.data.response);
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to Teams!</h1>
      {teams.map((team) => {
        return (
          <>
            <div>{team.team.name}</div>
            <div>{team.team.founded}</div>
            <div>{team.team.logo}</div>
          </>
        );
      })}
    </div>
  );
}

export default Teams;
