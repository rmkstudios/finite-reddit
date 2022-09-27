import Link from "next/link";
import styles from "../styles/Home.module.scss";

function DisplaySubreddits({ quickBar, setLoading, subreddit }) {
  return (
    <>
      {quickBar.map((element, key) => (
        <>
          {subreddit === element ? (
            <a className={styles.subredditButtonSelected}>r/{element}</a>
          ) : (
            <Link href={"/r/" + element} key={key}>
              <a
                className={styles.subredditButton}
                onClick={() => setLoading(true)}
              >
                r/{element}
              </a>
            </Link>
          )}
        </>
      ))}
    </>
  );
}

export default DisplaySubreddits;
