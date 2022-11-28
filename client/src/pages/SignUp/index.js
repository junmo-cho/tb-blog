import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST, SIGN_UP_RESET } from "../../reducer/user";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const { signUpDone } = useSelector(state => state.user);
  const navigate = useNavigate();

  const onSubmitSignUp = (data) => {
    if(data.password !== data.passwordCheck) {
      return setPasswordError(true);
    }

    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email: data.email, nickname: data.nickname, password: data.password }
    });
  }

  useEffect(() => {
    if(signUpDone) {
      dispatch({
        type: SIGN_UP_RESET,
      });
      return navigate('/login');
    }
  }, [signUpDone]);

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(onSubmitSignUp)}>
        <div>
          <label htmlFor="email">이메일</label>
          <input name="email" type="email" placeholder="이메일을 입력해 주세요." required { ...register("email") } />
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input name="nickname" type="nickname" placeholder="닉네임을 입력해 주세요." required { ...register("nickname") } />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input name="password" type="password" placeholder="비밀번호를 입력해 주세요." required { ...register("password") } />
          { passwordError ? <span>비밀번호가 일치하지 않습니다.</span> : null }
        </div>
        <div>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input name="passwordCheck" type="password" placeholder="비밀번호를 입력해 주세요." required { ...register("passwordCheck") } />
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}>가입하기</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;