import styles from "./MenuDrawer.module.css";

export default function MenuDrawer() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navBackground} />
      <div className={styles.navDrawer}>
        <div className={styles.navLinks}>
          <a href="#">Home</a>
        </div>
        <button className={styles.closeBtn}>X</button>
      </div>
    </div>
  );
}
