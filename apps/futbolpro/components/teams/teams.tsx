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
    <div className="section">
      <h1>Teams</h1>
      <div className="flex-wrap">
        {teams.map((team) => {
        return (
          <>
            <div className="card">
              <img src={team.team.logo} alt="" />
              <p>{team.team.name}</p>
              <p><small>{team.team.founded}</small></p>
            </div>
          </>
        );
      })}
      </div>
    </div>
  );
}

export default Teams;
