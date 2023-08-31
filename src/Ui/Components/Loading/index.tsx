import styles from "./Loading.module.scss";

export function Loading() {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles.loading} />
    </div>
  );
}
