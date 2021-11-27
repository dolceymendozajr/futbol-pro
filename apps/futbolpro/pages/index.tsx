import styles from './index.module.scss';
import { IndexProps } from '@envfutbolpro/types';
import { Ui } from '@envfutbolpro/ui';
import Players from '../components/players/players';
import Countries from '../components/countries/countries';
import Teams from '../components/teams/teams';

export function Index({ players, countries, teams }: IndexProps) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  return (
    <>
      <Ui />
      <div className="main">
        <Countries countries={countries} />
        <Teams teams={teams} />
        <Players players={players} />
      </div>
    </>
  );
}

export default Index;
