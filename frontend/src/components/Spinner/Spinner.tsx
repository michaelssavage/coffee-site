import styles from "./Spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} role="status">
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  );
};
