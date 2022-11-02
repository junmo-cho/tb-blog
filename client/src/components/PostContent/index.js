import { useSelector } from 'react-redux';
import "./style.scss";

const PostContent = () => {
  const { mainPosts } = useSelector(state => state);

  return (
    <>
      {mainPosts.map((post) => (
        <div key={post.id} className="post-container">
          <div className="left-info">
            <span className="post-category">{ post.category }</span>
            <h3 className="post-title">{ post.title }</h3>
            <p className="post-subtitle">{ post.subTitle }</p>
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