import { useRouter } from "next/router";
import Homepage from "../../components/Homepage";

function Subreddit() {
  const router = useRouter();
  const { subreddit } = router.query;

  return (
    <>
      <Homepage subreddit={subreddit} />
    </>
  );
}

export default Subreddit;
