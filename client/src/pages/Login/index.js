import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const onSubmitLogin = (data) => {
    setLogin(true);
    console.log({ email: data.email, password: data.password });
  }

  useEffect(() => {
    if(login) {
      return navigate("/", { replace: true });
    }
  }, [login]);

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <div className="email-area">
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" name="email" placeholder="이메일을 입력해 주세요." { ...register("email") } />
          </div>
          <div className="password-area">
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" name="password" placeholder="비밀번호를 입력해 주세요." { ...register("password") } />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>로그인</button>
            <Link to="/signup">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;