import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { LOAD_POST_REQUEST, REMOVE_POST_REQUEST, REMOVE_POST_RESET } from '../../reducer';
import ReactLoading, { bars, blank } from 'react-loading';
import "./style.scss";
import PostCard from '../PostCard';

const PostContent = ({ categoryPosts }) => {
  const { mainPosts } = useSelector(state => state);
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector(state => state);
  const { loadPostLoading, removePostDone } = useSelector(state => state);
  const { hasMorePosts } = useSelector(state => state);

  useEffect(() => {
    if(hasMorePosts && !loadPostLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_POST_REQUEST,
        lastId,
      });
    }
  }, []);

  return (
    <>
      { removePostLoading ? (
        <div className="loader-container">
          <ReactLoading type='spinningBubbles' color="#fff" height={367} width={175} />
        </div>
      ) : null }
      { categoryPosts.length !== 0 ? <PostCard postType={categoryPosts} /> : <PostCard postType={mainPosts} /> }
    </>
  );
}

export default PostContent;