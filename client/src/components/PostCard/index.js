import { Link } from 'react-router-dom';
import { LOAD_POST_REQUEST, REMOVE_POST_REQUEST, REMOVE_POST_RESET } from '../../reducer';
import { AiOutlineComment, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CommentForm from '../CommentForm';

const PostCard = ({ postType }) => {
  const dispatch = useDispatch();
  const { removePostDone } = useSelector(state => state);
  const [commentOpen, setCommentOpen] = useState(false);

  const onRemovePost = (postId) => {
    dispatch({
      type: REMOVE_POST_REQUEST, 
      data: postId
    });
  };

  useEffect(() => {
    if(removePostDone) {
      dispatch({
        type: REMOVE_POST_RESET,
      });
      dispatch({
        type: LOAD_POST_REQUEST,
      });
    }
  }, [removePostDone]);

  return (
    <>
    { postType.map((post) => (
      <div key={post.id} className="post-card">
        <div className="post-card-contents">
          <div className="left-info">
            <span className="post-category">{ post.category }</span>
            <h3 className="post-title">{ post.title }</h3>
            <p className="post-subtitle">{ post.subTitle }</p>
            {/* <ul className="hashtags-container">
              {post.hashtags.map((hashtag, hashIndex) => (
                <li key={hashIndex}>{hashtag}</li>
              ))}
            </ul> */}
            <Link to={`/post/${post.id}`}>
              <button className="more-btn">
                <em></em>
                <span>Read More</span>
              </button>
            </Link>
          </div>
          <div className="right-info">
            <span className="user-name">{ post.user }</span>
            <span className="date-created">{ post.date }</span>
            <div className="btn-wrap">
              <button className='comment-btn' onClick={() => setCommentOpen(!commentOpen)}>
                <AiOutlineComment />
              </button>
              <button className='delete-btn' onClick={() => { onRemovePost(post.id) }}>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>
        { commentOpen ? (
          <CommentForm post={post} />
        ) : null }
      </div>
    )) }
    </>
  );
}

export default PostCard;
