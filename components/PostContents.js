import Comments from "./Comments";
import Loading from "./Loading";
import DisplayPost from "./DisplayPost";

function PostContents({ post, comments, loading }) {
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DisplayPost post={post} />
          <Comments comments={comments} />
        </>
      )}
    </div>
  );
}

export default PostContents;
