import styles from './ui.module.scss';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div>
      <h1 className={styles.title}>Welcome to Futbol pro</h1>
    </div>
  );
}

export default Ui;
