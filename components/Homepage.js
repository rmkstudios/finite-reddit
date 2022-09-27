import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Header from "../components/Header";
import Loading from "./Loading";
import { RiCheckboxCircleFill } from "react-icons/ri";
import AllPosts from "./AllPosts";

function Homepage({ subreddit }) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quickBar, setQuickBar] = useState([
    "popular",
    "livestreamfail",
    "owlcity",
    "music",
    "funny",
  ]);

  // Gets the subreddit form the URL, fetches the data, sets it to posts
  useEffect(() => {
    let url = "https://www.reddit.com/r/" + subreddit + ".json?limit=7";
    fetch(url).then((res) => {
      if (res.status != 200) {
        console.log("Error");
        return;
      }
      res.json().then((data) => {
        if (data != null) {
          setPosts(data.data.children);
        }
      });
    });
  }, [subreddit]);

  // When posts are no longer null, the data has been set, so we set loading to false
  useEffect(() => {
    if (posts != null) {
      setLoading(false);
      console.log(posts);
    }
  }, [posts]);

  return (
    <div className={styles.grid}>
      <Head>
        <title>Browsing: r/{subreddit} - Finite Reddit</title>
      </Head>
      <Header
        subreddit={subreddit}
        quickBar={quickBar}
        setQuickBar={setQuickBar}
        setLoading={setLoading}
      />
      <div className={styles.posts}>
        {loading ? <Loading /> : <AllPosts posts={posts} />}
        {!loading ? (
          <>
            <div className={styles.connector}></div>
            <div className={styles.post}>
              <div className={styles.caughtUp}>
                <RiCheckboxCircleFill />
              </div>
              <div className={styles.title}>You're all caught up!</div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Homepage;
