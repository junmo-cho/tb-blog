import { useForm } from "react-hook-form";

const WrietPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user">작성자</label>
          <input id="user" type="user" name="user" placeholder="작성자" { ...register("user") } />
        </div>
        <div>
          <label htmlFor="title">제목</label>
          <input id="title" type="title" name="title" placeholder="제목" { ...register("title") } />
        </div>
        <div>
          <label htmlFor="subTitle">부제목</label>
          <input id="subTitle" type="subTitle" name="subTitle" placeholder="부제목" { ...register("subTitle") } />
        </div>
        <div>
          <label htmlFor="content">본문</label>
          <input id="content" type="content" name="content" placeholder="본문" { ...register("content") } />
        </div>
        <button type="submit">완료</button>
      </form>
    </>
  );
}

export default WrietPage;
