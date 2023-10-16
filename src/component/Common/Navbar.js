import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const currentNote = sessionStorage.getItem('currentNote');
  const currentNoteName = JSON.parse(localStorage.getItem('noteList'))[currentNote-1].noteName;

  const MenusArray = [
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

  const [showMenus, setShowMenus] = useState(false);

  const onShowMenus = () => {
    setShowMenus(!showMenus);
  };

  return (
    <>
      <div className="Navbar">
        <div className="NameSection">
          <span className="name">{currentNoteName}</span><span>다이어리</span>
        </div>
        <button className="MenuSection" onClick={onShowMenus} />
      </div>
      
      {showMenus && (
        <div className="Menus">
          {MenusArray.map((e, i) => (
            <React.Fragment key={i}>
              <Link to={e.url}>{e.menuName}</Link>
              {i === MenusArray.length - 1 ? null : <span className="devider">/</span>}
            </React.Fragment>
          ))}
        </div>
       )}
     </>
   );
};

export default Navbar;
