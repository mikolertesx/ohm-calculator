import styles from './band.module.scss';

type BandProps = {
  color?: string;
  label?: string;
  textColor?: string;
};

const Band = ({ color, label, textColor }: BandProps) => {
  //TODO Add an on hover pop up

  return (
    <div style={{ backgroundColor: color }} className={styles['band']}></div>
  );
};

export default Band;
