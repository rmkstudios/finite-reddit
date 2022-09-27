import Link from "next/link";
import styles from "../styles/Home.module.scss";

function DisplaySubreddits({ quickBar, setLoading }) {
  return (
    <>
      {quickBar.map((element, key) => (
        <Link href={"/r/" + element} key={key}>
          <a
            className={styles.subredditButton}
            onClick={() => setLoading(true)}
          >
            r/{element}
          </a>
        </Link>
      ))}
    </>
  );
}

export default DisplaySubreddits;
