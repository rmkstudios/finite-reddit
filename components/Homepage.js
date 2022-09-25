import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Thumbnail from "../components/Thumbnail";
import Header from "../components/Header";

function Homepage({ subreddit }) {
  const [posts, setPosts] = useState([]);
  const [sub, setSub] = useState("popular");
  const [loading, setLoading] = useState(true);

  // Gets the subreddit form the URL, fetches the data, sets it to posts
  useEffect(() => {
    let url = "https://www.reddit.com/r/" + sub + ".json?limit=7";
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
  }, [sub]);

  // Use this to view the JSON data in the console
  useEffect(() => {
    if (posts != null) {
      /* console.log(posts); */
    }
  }, []);

  return (
    <div className={styles.grid}>
      <Header setSub={setSub} />
      <div className={styles.posts}>
        <div className={styles.connector}></div>
        {posts != null
          ? posts.map((post, index) => (
              <div key={index} className={styles.post}>
                <Thumbnail
                  imageURL={post.data.thumbnail}
                  postURL={post.data.url}
                />
                <a className={styles.title} href={post.data.url}>
                  <div>{post.data.title}</div>
                  <div className={styles.postData}>
                    Upvotes: {post.data.ups} - Date: {post.data.created_utc}
                  </div>
                </a>
              </div>
            ))
          : ""}
        <div className={styles.post}>
          <div className={styles.noThumbnail}></div>
          <div className={styles.title}>You're all caught up!</div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
