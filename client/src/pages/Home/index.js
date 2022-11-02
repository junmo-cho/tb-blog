import PostContent from "../../components/PostContent";
import "./style.scss";

const Home = () => {
  return (
    <main>
      <span className="posts-total">361 posts</span>
      <PostContent />
    </main>
  );
}

export default Home;