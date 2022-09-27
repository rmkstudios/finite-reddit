import { useState } from "react";
import styles from "../styles/Home.module.scss";

function AddSubreddit({ quickBar, setQuickBar }) {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");

  const addSubreddit = () => {
    setToggle(false);
    setQuickBar([input, ...quickBar]);
  };
  return (
    <>
      {toggle ? (
        <>
          r/
          <input
            type="text"
            className={styles.subredditAdd}
            onChange={(e) => setInput(e.target.value)}
          />
          <a
            href="#"
            className={styles.subredditButton}
            onClick={() => addSubreddit()}
          >
            + add
          </a>
        </>
      ) : (
        <a
          href="#"
          className={styles.subredditButton}
          onClick={() => setToggle(true)}
        >
          + add subreddit
        </a>
      )}
    </>
  );
}

export default AddSubreddit;
