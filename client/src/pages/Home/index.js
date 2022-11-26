import PostContent from "../../components/PostContent";
import { HiPencil } from "react-icons/hi";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { mainPosts } = useSelector(state => state.post);

  const location = useLocation(); 
  const params = new URLSearchParams(location.search)
  const categoryParams = params.get("category")

  // console.log(categoryParams);

  const categoryPosts = mainPosts.filter((c) => c.category === categoryParams);
  // console.log(Boolean(categoryPosts.length !== 0), categoryPosts);

  return (
    <main className="post-container">
      <div className="post-top-info">
        <span className="posts-total">{ categoryPosts.length !== 0 ? categoryPosts.length : mainPosts.length } posts</span>
        <Link to="/writePage">
          <button className="create-btn">
            <HiPencil />
            <span>글쓰기</span>
          </button>
        </Link>
      </div>
      <PostContent categoryPosts={categoryPosts} />
    </main>
  );
}

export default Home;