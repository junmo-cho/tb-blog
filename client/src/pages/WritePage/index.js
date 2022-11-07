import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { BsArrowBarLeft } from "react-icons/bs";
import "./style.scss";

const WrietPage = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const dispatch = useDispatch();
  
  const categoryList = ["Category", "Web", "Server", "Design", "Tool", "Etc"];
  const [selected, setSelected] = useState("Category");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  }

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
          <div className="top-area">
            <select name="category" onChange={handleSelect} value={selected} className={ selected === "Category" ? "dis" : "" }>
              { categoryList.map((c) => (
                <option key={c} value={c} disabled={ c === "Category" } hidden={ c === "Category" } className="others">{c}</option>
              )) }
            </select>
            <span className="boundary-line"></span>
            <div className="input-area">
              <label htmlFor="user">작성자</label>
              <input id="user" type="user" name="user" placeholder="작성자을 입력해 주세요." { ...register("user") } />
            </div>
          </div>
          <div className="input-area">
            <label htmlFor="title">제목</label>
            <input id="title" type="title" name="title" placeholder="제목을 입력해 주세요." { ...register("title") } />
            <span className="title-line"></span>
          </div>
          <div className="input-area">
            <label htmlFor="subTitle">부제목</label>
            <input id="subTitle" type="subTitle" name="subTitle" placeholder="부제목을 입력해 주세요." { ...register("subTitle") } />
          </div>
          <div className="input-area content-area">
            <label htmlFor="content">본문</label>
            <textarea id="content" type="content" name="content" placeholder="본문이외다" { ...register("content") } ></textarea>
          </div>
          <div className="btn-wrap">
            <button type="button" className="exit">
              <BsArrowBarLeft /> <span>나가기</span>
              </button>
            <button type="submit" disabled={isSubmitting} className="completed">완료</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WrietPage;
