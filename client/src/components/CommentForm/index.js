import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../../reducer";
import "./style.scss";

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");

  const onChangeComment = (e) => {
    setCommentText(e.target.value);
  }

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
          <li className="comment-card">
            <span className="comment-user">사용자1</span>
            <div className="comment-contents">내용</div>
          </li>
          <li className="comment-card">
            <span className="comment-user">사용자2</span>
            <div className="comment-contents">내용</div>
          </li>
          <li className="comment-card">
            <span className="comment-user">사용자3</span>
            <div className="comment-contents">내용</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CommentForm;