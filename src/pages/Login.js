import './Login.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setPageTitle } from "../util";
import Button from "../component/Common/Button";
import logo from "../img/yurinote-logo.svg";

const Login = () => {
  useEffect(() => {
    setPageTitle("로그인");
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const goSignup = () => {
    alert('개발 예정');
  };

  const goHome = () => {
    navigate('/diary');
  }

  const checkLogin = () => {
    console.log(isAuthenticated);
    setIsAuthenticated(true); // 이 부분을 수정하여 로그인 상태를 변경
    console.log(isAuthenticated);
    goHome();
  };

  return (
    <div className="Login">
      <div>
        <img src={logo} alt="로고" />
        <div className="input-wrapper">
          <label>아이디</label>
          <input type='text' placeholder="계정 아이디" required autoFocus />
        </div>
        <div className="input-wrapper">
          <label>비밀번호</label>
          <input type='password' placeholder='계정 비밀번호' required />
        </div>
        <Button type={'negative'} value={'회원가입'} onClick={goSignup} />
        <Button type={'positive'} value={'로그인'} onClick={checkLogin} />
      </div>
    </div>
  );
};

export default Login;
