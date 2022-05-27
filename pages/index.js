import styles from '../styles/Home.module.css';

export default function Home() {
  const dotStyle = {
    marginTop: '12%',
    marginLeft: '28%',
  };
  return (
    <div className={styles.container}>
      <span className={styles.dot} style={dotStyle}>
        Test
      </span>
    </div>
  );
}
