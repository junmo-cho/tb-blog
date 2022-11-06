import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost } from "../../reducer";
import "./style.scss";

const WrietPage = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch({
      type: 'ADD_POST',
      data: { user: data.user, title: data.user, subTitle: data.subTitle, content: data.content }
    });

    console.log(data);
  }

  return (
    <div className="write-container">
      <div className="write-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title">제목</label>
            <input id="title" type="title" name="title" placeholder="제목을 입력해 주세요." { ...register("title") } />
            <span className="title-line"></span>
          </div>
          <div>
            <label htmlFor="user">작성자</label>
            <input id="user" type="user" name="user" placeholder="작성자" { ...register("user") } />
          </div>
          <div>
            <label htmlFor="subTitle">부제목</label>
            <input id="subTitle" type="subTitle" name="subTitle" placeholder="부제목" { ...register("subTitle") } />
          </div>
          <div>
            <label htmlFor="content">본문</label>
            <input id="content" type="content" name="content" placeholder="본문" { ...register("content") } />
          </div>
          <button type="submit" disabled={isSubmitting}>완료</button>
        </form>
      </div>
    </div>
  );
}

export default WrietPage;
