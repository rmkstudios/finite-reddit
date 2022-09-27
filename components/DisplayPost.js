import styles from "../styles/PostContents.module.scss";

function DisplayPost({ post }) {
  function decode(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div className={styles.expandedPost}>
      {post.data.post_hint === "image" ? (
        <img className={styles.mediaContent} src={post.data.url} />
      ) : (
        ""
      )}
      {post.data.post_hint === "link" ? "a link should be displayed here" : ""}
      {post.data.selftext_html ? (
        <div
          className={styles.selfText}
          dangerouslySetInnerHTML={{
            __html: decode(post.data.selftext_html),
          }}
        ></div>
      ) : (
        ""
      )}
      {post.data.post_hint === "rich:video" &&
      post.data.domain === "youtube.com" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: decode(post.data.media_embed.content),
          }}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DisplayPost;

//decode(post.data.media_embed.content)
