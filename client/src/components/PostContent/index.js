import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { LOAD_POST_REQUEST, REMOVE_POST_REQUEST, REMOVE_POST_RESET } from '../../reducer';
import ReactLoading, { bars, blank } from 'react-loading';
import { AiOutlineDelete } from 'react-icons/ai';
import "./style.scss";

const PostContent = ({ categoryPosts }) => {
  const { mainPosts } = useSelector(state => state);
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector(state => state);
  const { loadPostLoading, removePostDone } = useSelector(state => state);
  const { hasMorePosts } = useSelector(state => state);
  const navigator = useNavigate();

  const onRemovePost = (postId) => {
    dispatch({
      type: REMOVE_POST_REQUEST, 
      data: postId
    });
  };

  useEffect(() => {
    if(hasMorePosts && !loadPostLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_POST_REQUEST,
        lastId,
      });
    }
  }, []);

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
      { removePostLoading ? (
        <div className="loader-container">
          <ReactLoading type='spinningBubbles' color="#fff" height={367} width={175} />
        </div>
      ) : null }
      { categoryPosts.length !== 0 ? categoryPosts.map((post) => (
        <div key={post.id} className="post-card">
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
            <button className='delete-btn' onClick={() => { onRemovePost(post.id) }}>
              <AiOutlineDelete />
            </button>
            <span className="user-name">{ post.user }</span>
            <span className="date-created">{ post.date }</span>
          </div>
        </div>
      )) : mainPosts.map((post) => (
        <div key={post.id} className="post-card">
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
            <button className='delete-btn' onClick={() => { onRemovePost(post.id) }}>
              <AiOutlineDelete />
            </button>
            <span className="user-name">{ post.user }</span>
            <span className="date-created">{ post.date }</span>
          </div>
        </div>
      )) }
    </>
  );
}

export default PostContent;