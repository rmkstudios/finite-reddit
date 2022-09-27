import styles from "../styles/PostContents.module.scss";

function Comments({ comments }) {
  return (
    <div className={styles.comments}>
      {comments != null ? (
        <>
          {comments.map((element, key) => (
            <>
              {element.data.body ? (
                <div className={styles.comment} key={key}>
                  {element.data.body}
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </>
      ) : (
        "There are no comments to display"
      )}
    </div>
  );
}

export default Comments;
