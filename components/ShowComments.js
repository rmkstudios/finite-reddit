import styles from "../styles/Home.module.scss";

function ShowComments({ comments, toggle }) {
  return (
    <>
      {comments != null && toggle === true ? (
        <div>
          <ul className={styles.comments}>
            {comments.map((element, key) => (
              <li key={key}>{element.data.body}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ShowComments;
