import Post from "./Post";

function AllPosts({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
}

export default AllPosts;

/*
            <div className={styles.postData}>
              Upvotes: {post.data.ups} - Date: {post.data.created_utc}
            </div>
*/
