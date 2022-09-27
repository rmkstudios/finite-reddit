import styles from "../styles/Home.module.scss";

function Comments({ comments }) {
  return (
    <div className={styles.comments}>
      {comments != null ? (
        <ul>
          {comments.map((element, key) => (
            <li key={key}>{element.data.body}</li>
          ))}
        </ul>
      ) : (
        "There are no comments to display"
      )}
    </div>
  );
}

export default Comments;

/*
comments.map((element) => element.data.body)
*/
