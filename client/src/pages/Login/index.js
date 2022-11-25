const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <form>
          <div className="email-area">
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" name="email" placeholder="이메일을 입력해 주세요." />
          </div>
          <div className="password-area">
            <label htmlFor="password">이메일</label>
            <input id="password" type="password" name="password" placeholder="이메일을 입력해 주세요." />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;