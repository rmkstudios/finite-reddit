import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";

import Thumbnail from "./Thumbnail";
import Comments from "./Comments";
import PostContents from "./PostContents";

function Post({ post, index }) {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.post}>
      <Thumbnail
        imageURL={post.data.thumbnail}
        postURL={post.data.url}
        toggleOpen={toggleOpen}
        setToggleOpen={setToggleOpen}
        comments={comments}
        setComments={setComments}
        setLoading={setLoading}
        post={post}
      />
      <div className={styles.title}>
        <div>{post.data.title}</div>
        {toggleOpen ? (
          <PostContents post={post} comments={comments} loading={loading} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Post;
