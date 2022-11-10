import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { REMOVE_POST_REQUEST } from '../../reducer';
import ReactLoading, { bars, blank } from 'react-loading';
import { AiOutlineDelete } from 'react-icons/ai';
import "./style.scss";

const PostContent = () => {
  const { mainPosts } = useSelector(state => state);
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector(state => state);

  const onRemovePost = (postId) => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: postId
    });

    console.log(postId);
  };

  // useEffect(() => {
  //   if(removePostLoading) {
  //     console.log("remove");
  //     return (
  //       <div>
  //         {/* <ReactLoading type={bars} color="#fff" height={667} width={375} /> */}
  //         Loading...
  //       </div>
  //     );
  //   }
  // }, [removePostLoading]);

  return (
    <>
      { removePostLoading ? (
        <div className="loader-container">
          <ReactLoading type='spinningBubbles' color="#fff" height={367} width={175} />
        </div>
      ) : null }
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
            <button className='delete-btn' onClick={() => { onRemovePost(post.id) }}>
              <AiOutlineDelete />
            </button>
            <span className="user-name">{ post.User.nickname }</span>
            <span className="date-created">{ post.date }</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostContent;