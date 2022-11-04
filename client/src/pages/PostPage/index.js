import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.scss";

const PostPage = () => {
  const { id } = useParams();
  const { mainPosts } = useSelector(state => state);
  const findPost = mainPosts.find(f => f.id === Number(id));

  return (
    <div className="post-detail-container">
      <div className="post-header">
        <div className="header-inner">
          <span className="detail-category">{ findPost.category }</span>
          <h3 className="detail-title">{ findPost.title }</h3>
          <p className="detail-subtitle">{ findPost.subTitle }</p>
          <ul className="hashtags-container">
            {findPost.hashtags.map((hashtag, hashIndex) => (
              <li key={hashIndex}>{hashtag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="post-content">
        <p>{findPost.content}</p>
      </div>
    </div>
  );
}

export default PostPage;