import styles from './index.module.scss';
import { IndexProps } from '@envfutbolpro/types';
import { Ui } from '@envfutbolpro/ui';
import Players from '../components/players/players';

export function Index({ players }: IndexProps) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  return (
    <div>
      <Ui />
      <Players players={players} />
    </div>
  );
}

export default Index;
