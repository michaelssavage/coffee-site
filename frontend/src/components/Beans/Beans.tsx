import Image from "next/image";
import styles from "./Beans.module.scss";

export const Beans = () => {
  return [...Array(4)].map((_, index) => {
    return (
      <div key={`bean-${index}`} className={styles.bean}>
        <Image
          src="/bigger-bean.png"
          width={300}
          height={180}
          alt={`coffee bean-${index}`}
        />
      </div>
    );
  });
};
