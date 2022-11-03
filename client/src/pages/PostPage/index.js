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
        <span className="post-category">{ findPost.category }</span>
        <h3 className="post-title">{ findPost.title }</h3>
        <p className="post-subtitle">{ findPost.subTitle }</p>
        <ul className="hashtags-container">
          {findPost.hashtags.map((hashtag, hashIndex) => (
            <li key={hashIndex}>{hashtag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostPage;