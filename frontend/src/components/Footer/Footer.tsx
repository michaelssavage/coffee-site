import { Beans } from "components/Beans";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Beans />
      <h2>
        MVST <span className="poppins">Coffee</span>
      </h2>
    </div>
  );
};
