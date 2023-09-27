import "./Header.css";
import { Routes, Route, Link } from "react-router-dom";

const Header = ({ title,  leftChild, rightChild }) => {
    return (
        <>
        <div className="Menus">
            <Link to={"/login"}>Login </Link>
            <span className="devider">/</span>
            <Link to={"/"}>Diary </Link>
            <span className="devider">/</span>
            <Link to={"/todo"}>Todo</Link>
            <span className="devider">/</span>
            <Link to={"/count"}>Count</Link>
        </div>
        <div className="Header">
            <div className="header_left">{leftChild}</div>
            <div className="header_title"><label>{title}</label></div>
            <div className="header_right">{rightChild}</div>
        </div>
        </>
    );
};

export default Header;