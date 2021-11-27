import styles from './index.module.scss';
import { IndexProps } from '@envfutbolpro/types';
import { Ui } from '@envfutbolpro/ui';
import Players from '../components/players/players';
import Countries from '../components/countries/countries';

export function Index({ players, countries }: IndexProps) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  return (
    <div>
      <Ui />
      <Players players={players} />
      <Countries countries={countries} />
    </div>
  );
}

export default Index;
