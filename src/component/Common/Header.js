import "./Header.css";
import Navbar from "./Navbar";

const Header = ({ title,  leftChild, rightChild }) => {
    return (
        <>
        <Navbar/>
        <div className="Header">
            <div className="header_left">{leftChild}</div>
            <div className="header_title"><label>{title}</label></div>
            <div className="header_right">{rightChild}</div>
        </div>
        </>
    );
};

export default Header;