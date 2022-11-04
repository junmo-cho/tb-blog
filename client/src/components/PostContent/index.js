import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import "./style.scss";

const PostContent = () => {
  const { mainPosts } = useSelector(state => state);

  return (
    <>
      {mainPosts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="left-info">
            <span className="post-category">{ post.category }</span>
            <h3 className="post-title">{ post.title }</h3>
            <p className="post-subtitle">{ post.subTitle }</p>
            <ul className="hashtags-container">
              {post.hashtags.map((hashtag, hashIndex) => (
                <li key={hashIndex}>{hashtag}</li>
              ))}
            </ul>
            <Link to={`/post/${post.id}`}>
              <button className="more-btn">
                <em></em>
                <span>Read More</span>
              </button>
            </Link>
          </div>
          <div className="right-info">
            <span className="user-name">{ post.User.nickname }</span>
            <span className="date-created">{ post.date }</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostContent;