import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const currentNote = sessionStorage.getItem('currentNote');
  const currentNoteName = JSON.parse(localStorage.getItem('noteList'))[currentNote-1].noteName;

  const Menus = [
    {
      url: '/',
      menuName: 'Main',
    },
    {
      url: '/diary',
      menuName: 'Diary',
    },
    {
      url: '/todo',
      menuName: 'Todo',
    },
    {
      url: '/setting',
      menuName: 'Setting',
    },
  ];

  return (
    <>
    <div className="Navbar">
      <div className="NameSection">
        <span className="name">{currentNoteName}</span><span>다이어리</span>
      </div>
      <button className="MenuSection"/>
        </div>
      <div className="Menus">
        {Menus.map((e, i) => (
          <React.Fragment key={i}>
            <Link to={e.url}>{e.menuName}</Link>
            {i === Menus.length - 1 ? null : <span className="devider">/</span>}
          </React.Fragment>
        ))}
     </div>
   </>
 );
};

export default Navbar;
