import styles from "./page.module.css";
import MenuContainer from "./components/menu/MenuContainer";

export default function Page() {
  return (
    <div className={styles.page}>
      <MenuContainer />
    </div>
  );
}
