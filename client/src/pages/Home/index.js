import PostContent from "../../components/PostContent";
import { HiPencil } from "react-icons/hi";
import "./style.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="post-container">
      <div className="post-top-info">
        <span className="posts-total">361 posts</span>
        <Link to="/writePage">
          <button className="create-btn">
            <HiPencil />
            <span>글쓰기</span>
          </button>
        </Link>
      </div>
      <PostContent />
    </main>
  );
}

export default Home;