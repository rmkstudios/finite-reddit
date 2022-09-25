import styles from "../styles/Home.module.scss";
import Link from "next/link";

function Header({ setSub }) {
  return (
    <header>
      <div className={styles.logo}>
        Finite Reddit - get back to what's important
      </div>
      <div className={styles.subreddits}>
        <a href="#" className={styles.subredditButton}>
          + add subreddit
        </a>
        <Link href="/r/popular">
          <a
            className={styles.subredditButton}
            onClick={() => setSub("popular")}
          >
            r/popular
          </a>
        </Link>
        <Link href="/r/livestreamfail">
          <a
            className={styles.subredditButton}
            onClick={() => setSub("livestreamfail")}
          >
            r/livestreamfail
          </a>
        </Link>
        <Link href="/r/owlcity">
          <a
            className={styles.subredditButton}
            onClick={() => setSub("owlcity")}
          >
            r/owlcity
          </a>
        </Link>
        <Link href="/r/music">
          <a className={styles.subredditButton} onClick={() => setSub("music")}>
            r/music
          </a>
        </Link>
      </div>
      <div className={styles.nowBrowsing}>Browsing: r/livestreamfail</div>
    </header>
  );
}

export default Header;
