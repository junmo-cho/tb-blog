import PostContent from "../../components/PostContent";
import { HiPencil } from "react-icons/hi";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { mainPosts } = useSelector(state => state);

  const location = useLocation(); 
  const params = new URLSearchParams(location.search)
  const categoryParams = params.get("category")

  console.log(categoryParams);

  return (
    <main className="post-container">
      <div className="post-top-info">
        <span className="posts-total">{ mainPosts.length } posts</span>
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