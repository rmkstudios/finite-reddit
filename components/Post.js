import styles from "../styles/Home.module.scss";

import Thumbnail from "../components/Thumbnail";
import Comments from "./Comments";

function Post({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className={styles.post}>
          <Thumbnail imageURL={post.data.thumbnail} postURL={post.data.url} />
          <div className={styles.title}>
            <div>{post.data.title}</div>
            <Comments post={post} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;

/*
            <div className={styles.postData}>
              Upvotes: {post.data.ups} - Date: {post.data.created_utc}
            </div>
*/
