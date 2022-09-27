import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";

function Thumbnail({
  imageURL,
  postURL,
  toggleOpen,
  setToggleOpen,
  comments,
  setComments,
  setLoading,
  post,
}) {
  function isImgUrl(imageURL) {
    return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(imageURL);
  }

  // Get Comments from API
  const toggleComments = () => {
    let url = "http://www.reddit.com/" + post.data.permalink + ".json?limit=10";
    setLoading(true);
    fetch(url).then((res) => {
      if (res.status != 200) {
        console.log("Error");
        return;
      }
      res.json().then((data) => {
        if (data != null) {
          setComments(data[1].data.children);
        }
      });
    });
  };

  useEffect(() => {
    if (comments != null) {
      setLoading(false);
    }
  }, [comments]);

  return (
    <>
      {isImgUrl(imageURL) ? (
        <img
          className={styles.thumbnail}
          src={imageURL}
          onClick={() => {
            setToggleOpen(!toggleOpen);
            toggleComments();
          }}
        />
      ) : (
        <div
          className={styles.noThumbnail}
          onClick={() => {
            setToggleOpen(!toggleOpen);
            toggleComments();
          }}
        >
          {toggleOpen ? <RiArrowDropDownLine /> : <RiArrowDropRightLine />}
        </div>
      )}
    </>
  );
}

export default Thumbnail;

/*

<Link href={postURL}>
          <img
            className={styles.thumbnail}
            src={imageURL}
            onClick={() => setToggleOpen(!toggleOpen)}
          />
        </Link>

*/
