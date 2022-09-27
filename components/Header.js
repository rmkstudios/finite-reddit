import styles from "../styles/Home.module.scss";
import Link from "next/link";
import DisplaySubreddits from "./DisplaySubreddits";
import AddSubreddit from "./AddSubreddit";

function Header({ subreddit, quickBar, setQuickBar, setLoading }) {
  return (
    <header>
      <div className={styles.logo}>
        Finite Reddit - get back to what's important
      </div>
      <div className={styles.subreddits}>
        <AddSubreddit quickBar={quickBar} setQuickBar={setQuickBar} />

        <DisplaySubreddits quickBar={quickBar} setLoading={setLoading} />
      </div>
      <div className={styles.nowBrowsing}>Browsing: r/{subreddit}</div>
    </header>
  );
}

export default Header;
