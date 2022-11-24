import { Link } from 'react-router-dom';
import { LOAD_POST_REQUEST, REMOVE_POST_REQUEST, REMOVE_POST_RESET } from '../../reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import PostCardContent from '../PostCardContent';

const PostCard = ({ postType }) => {
  const dispatch = useDispatch();
  const { removePostDone } = useSelector(state => state);

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
      <PostCardContent key={post.id} post={post} />
    )) }
    </>
  );
}

export default PostCard;
