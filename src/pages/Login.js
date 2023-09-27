import './Login.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setPageTitle  } from "../util";
import Button from "../component/Diary/Button";
import logo from "../img/yurinote-logo.svg"

const Main = () => {
    useEffect(() => {
        setPageTitle("로그인");
    }, []);

    const navigate = useNavigate();
    const goHome = () => {
      navigate(`/`);
  }

    return <div className="Login">
      <div>
        <img src={logo}/>
        <div className="input-wrapper"><label>아이디</label><input type='text' placeholder="계정 아이디"></input></div>
        <div className="input-wrapper"><label>비밀번호</label><input type='text' placeholder='계정 비밀번호'></input></div>
        <Button type={'negative'} value={'회원가입'}/>
        <Button type={'positive'} value={'로그인'} onClick={goHome}/>
      </div>
    </div>;
};

export default Main;