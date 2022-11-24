import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../../reducer";
import "./style.scss";

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");

  const onChangeComment = useCallback((e) => {
    setCommentText(e.target.value);
  }, [commentText]);

  const onSubmitComment = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id }
    });
  }

  return (
    <div className="comment-area">
      <div className="input-area">
        <form onSubmit={onSubmitComment}>
          <textarea onChange={onChangeComment}></textarea>
          <button type="submit" className="comment-done-btn">완료</button>
        </form>
      </div>
      <div className="comment-list-area">
        <ul>
          { post.Comments.map((comment) => (
            <li key={comment.id} className="comment-card">
              <span className="comment-user">{}</span>
              <div className="comment-contents">{comment.content}</div>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}

export default CommentForm;