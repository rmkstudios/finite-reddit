import styles from "../styles/Home.module.scss";
import Image from "next/image";

function Loading() {
  return (
    <div className={styles.loading}>
      <Image src="/loading.svg" alt="Loading.." width={30} height={30} />
    </div>
  );
}

export default Loading;
