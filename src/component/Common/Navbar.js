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

  const showMenus = () => {
    console.log('show');
  }

  return (
    <div className="Navbar">
      <div className="NameSection">
        <span className="name">{currentNoteName}</span><span>다이어리</span>
      </div>
      <div className="MenuSection" onClick={showMenus()}/>
      <div className="Menus">
        {Menus.map((e, i) => (
          <React.Fragment key={i}>
            <Link to={e.url}>{e.menuName}</Link>
          </React.Fragment>
        ))}
     </div>
   </div>
 );
};

export default Navbar;
