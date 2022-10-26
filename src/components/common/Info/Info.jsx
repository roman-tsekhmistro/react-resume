import styles from './info.module.scss';

export default function Info({title, details}) {
  return (
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.details}>{details}</p>
      </div>
  );
}