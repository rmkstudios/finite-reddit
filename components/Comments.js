import { useState, useEffect } from "react";

import Loading from "./Loading";
import ShowComments from "./ShowComments";

function Comments({ post }) {
  const [comments, setComments] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (comments != null) {
      setLoading(false);
    }
  }, [comments]);

  //
  const toggleComments = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
      let url =
        "http://www.reddit.com/" + post.data.permalink + ".json?limit=10";
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
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => toggleComments(post)}>Toggle</button>
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <ShowComments comments={comments} toggle={toggle} />
        )}
      </div>
    </div>
  );
}

export default Comments;

/*
comments.map((element) => element.data.body)
*/
