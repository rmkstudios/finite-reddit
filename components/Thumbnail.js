import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

function Thumbnail({ imageURL, postURL }) {
  function isImgUrl(imageURL) {
    return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(imageURL);
  }

  return (
    <>
      {isImgUrl(imageURL) ? (
        <Link href={postURL}>
          <img className={styles.thumbnail} src={imageURL} />
        </Link>
      ) : (
        <Link href={postURL}>
          <div className={styles.noThumbnail}>
            <RiArrowDropDownLine />
          </div>
        </Link>
      )}
    </>
  );
}

export default Thumbnail;

/*

<Image
        className={styles.thumbnail}
        src={url}
        onError={() => {
          console.log("no thumbnail - error");
        }}
        layout="fill"
      />

*/
